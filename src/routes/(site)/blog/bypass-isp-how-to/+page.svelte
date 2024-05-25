<script>
	import MetaHead from '$lib/MetaHead.svelte'
	export const tags = ['Wireguard', 'Linode', 'Web dev', 'Linux']

	const chapters = [
		['Intro', 'Create VPS', 'Config Wireguard'],
		['Test tunnel', 'Forward traffic', 'Profit']
	]

	const homeServerWg0 = `[Interface]
PrivateKey = <generated private key>
Address = 192.168.4.2

[Peer]
PublicKey = <VPS public key>
AllowedIPs = 192.168.4.1/32
Endpoint = <VPS IP>:55107
PersistentKeepalive = 25`

	const vpsWg0 = `[Interface]
PrivateKey = <generated private key>
ListenPort = 55107
Address = 192.168.4.1

[Peer]
PublicKey = <home server public key>
AllowedIPs = 192.168.4.2/32`

	import BlogChapters from '$lib/BlogChapters.svelte'
</script>

<MetaHead
	title="How to bypass ISP port blocking"
	description="Bypass ISP port blocking with these simple techniques"
	image="/bypass-isp-how-to/0.webp"
/>

<BlogChapters {chapters} />

<div class="content">
	<section class="section">
		<h1 id="0.0" class="section-title">How to bypass ISP port blocking</h1>
		<div class="tags">
			{#each tags as tag}
				<a href="/blogs" class="tag">{tag}</a>
			{/each}
		</div>
		<p>
			Wow you just made your very own, very proud web service whether it be your personal webpage or
			a convenient API you wrote for your pleasure but there's one problem, you can't receive
			requests from port 80, you know where you're supposed to get requests?
		</p>

		<p>
			ISPs already don't give you the privilege of free static IPs to use for your hosting project,
			to the extent of revoking reception on ports that matter.
		</p>

		<p>
			With this cold indifference how would you expose your epic home server to the world? That's
			when get our old friends: <strong>Wireguard</strong> and any of your favorite <strong>VPS</strong> really
		</p>
	</section>

	<section class="section" id="0.1">
		<h2 class="section-title">Create a VPS instance</h2>
		<p>
			Any VPS provider that can provision a debian-based distro should work. For the sake of
			simplicity we'll be using linode as our VPS.
		</p>
		<ol class="section-steps">
			<li>
				<p>
					After you created your Linode account <strong>go to your dashboard</strong> and create a linode instance
				</p>
				<img class="img" src="/bypass-isp-how-to/0.webp" alt="begin create linode" />
			</li>
			<li>
				<p>Pick a debian-based distro, you may pick Ubuntu but <strong>Debian 11</strong> can cook</p>
				<img
					loading="lazy"
					class="img"
					src="/bypass-isp-how-to/1.webp"
					alt="pick a debian-based distro"
				/>
			</li>
			<li>
				<p>Choose your region. Feel free to consult their speedtest to see what works for you</p>
				<img loading="lazy" class="img" src="/bypass-isp-how-to/2.webp" alt="pick your region" />
			</li>
			<li>
				<p>Pick the cheapest plan, mine is $5</p>
				<img
					loading="lazy"
					class="img"
					src="/bypass-isp-how-to/3.webp"
					alt="pick the cheapest plan($5)"
				/>
			</li>
			<li>
				<p>Don't forget to set a root password</p>
				<img
					loading="lazy"
					class="img"
					src="/bypass-isp-how-to/4.webp"
					alt="decide a root password"
				/>
			</li>
			<li>
				<p>Review your configuration and hit Create</p>
				<img
					loading="lazy"
					class="img"
					src="/bypass-isp-how-to/5.webp"
					alt="finish create linode"
				/>
			</li>
		</ol>
	</section>

	<section class="section" id="0.2">
		<h2 class="section-title">Configure wireguard</h2>
		<p>
			Wireguard is a open source, highly configurable VPN software that establishes encrypted
			tunnels for secure communication
		</p>
		<p class="section-note">
			The following commands are to be executed for both your VPS and home server unless mentioned
			otherwise
		</p>
		<ol class="section-steps">
			<li>
				<p>Make sure packages are up to date before installing wireguard</p>
				<pre class="section-code">$ apt update && apt upgrade
	$ apt install wireguard -y</pre>
				<!-- <img src='/bypass-isp-how-to0.png' alt='begin create linode'/> -->
			</li>
			<li>
				<p>Initiate our wireguard tunnel config</p>
				<p class="section-note">
					This code creates a /etc/wireguard/wg0.conf file and writes preliminary text before where
					you're supposed to put your private key
				</p>
				<pre
					class="section-code">$ (umask 077 && printf "[Interface]\nPrivateKey = " | sudo tee /etc/wireguard/wg0.conf > /dev/null)</pre>
			</li>
			<li>
				<p>Generate private and public keys</p>
				<p>
					Aside from appending our private key in <em>wg0.conf</em> and getting our public key from
					standard output, it's also stored on a <em>publickey</em> file. You'll need these to authenticate
					the peers
				</p>
				<pre
					class="section-code">$ wg genkey | sudo tee -a /etc/wireguard/wg0.conf | wg pubkey | sudo tee /etc/wireguard/publickey</pre>
			</li>
			<li>
				<p>Finished <em>/etc/wireguard/wg0.conf</em> for VPS</p>
				<pre class="section-code">{vpsWg0}</pre>
			</li>
			<li>
				<p>Finished <em>/etc/wireguard/wg0.conf</em> for home server</p>
				<pre class="section-code">{homeServerWg0}</pre>
			</li>
			<li>
				<p>Enable ipv4 forwarding by uncommenting this line in <em>/etc/sysctl.conf</em> on VPS</p>
				<pre class="section-code"># Uncomment the next line to enable packet forwarding for IPv4
	net.ipv4.ip_forward=1</pre>
				<pre class="section-code">$ sysctl --system</pre>
			</li>
			<li>
				<p>Start and enable autostart systemd services on both</p>
				<pre class="section-code">$ systemctl start wg-quick@wg0
	$ systemctl enable wg-quick@wg0</pre>
			</li>
		</ol>
	</section>

	<section class="section" id="1.0">
		<h2 class="section-title">Testing tunnel</h2>
		<p>
			Moment of truth, if you did everything right up to this point, you should be able to observe
			signs of a working tunnel. For example, you should be able to SSH towards your peer using the
			internal IP as specified in wg0.conf
		</p>
		<pre class="section-code">$ ping 192.168.4.1 # From home server
	$ ping 192.168.4.2 # From VPS
	</pre>
	</section>

	<section class="section" id="1.1">
		<h2 class="section-title">Forwarding traffic through your tunnel</h2>
		<p>
			Unfortunately receiving traffic from the VPS won't mean receiving it from the home server. So
			let's make it so
		</p>
		<p class="section-note">
			A few commands include a port `80`: feel free to add rules for other ports that you want, like
			443 for https or even port 6443 for kubernetes remote access
		</p>
		<pre class="section-code"># Drop all existing forwarding rules
	$ iptables -P FORWARD DROP
	
	# Forward traffic from VPS to Home through port 80 from your default network interface [eth0] to your wireguard tunnel [wg0]
	
	$ iptables -A FORWARD -i eth0 -o wg0 -p tcp --syn --dport 80 -m conntrack --ctstate NEW -j ACCEPT
	
	#
	$ iptables -A FORWARD -i eth0 -o wg0 -m conntrack --ctstate  ESTABLISHED,RELATED -j ACCEPT
	$ iptables -A FORWARD -i wg0 -o eth0 -m conntrack --ctstate  ESTABLISHED,RELATED -j ACCEPT
	
	# Prerouting
	$ iptables -t  nat -A PREROUTING -i eth0 -p tcp --dport 80 -j DNAT --to-destination 192.168.4.2
	
	# Postrouting
	$ iptables -t  nat -A POSTROUTING -o wg0 -p tcp --dport 80 -d 192.168.4.2 -j SNAT --to-source 192.168.4.1
	</pre>
	</section>

	<section class="section" id="1.2">
		<h2 class="section-title">Meow</h2>
	</section>
</div>
