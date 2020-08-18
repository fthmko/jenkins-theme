(function() {
	// icon mapping, same file is separated by position/href
	let MMP = {
		'new-package.png': 'mdi-text-box-plus',
		'new-user.png': 'mdi-account-plus',
		'user.png': [{
			pos: 'left',
			href: '/asynchPeople/',
			value: 'mdi-account-multiple'
		}, {
			pos: 'main',
			value: 'mdi-account-multiple'
		}, {
			pos: 'left',
			href: '/my-views',
			value: 'mdi-folder-star'
		}],
		'notepad.png': [{
			pos: 'left',
			value: 'mdi-history'
		}, {
			pos: 'main',
			value: 'mdi-script-text'
		}],
		'search.png': [{
			pos: 'left',
			href: '/projectRelationship',
			value: 'mdi-vector-link'
		}, {
			pos: 'left',
			href: '/',
			value: 'mdi-text-box-outline'
		}],
		'fingerprint.png': 'mdi-fingerprint',
		'gear2.png': 'mdi-cog',
		'gear.png': 'mdi-folder-edit',
		'blueocean.png': 'mdi-digital-ocean',
		'device-24x24.png': 'mdi-table-lock',
		'folder.png': [{
			pos: 'left',
			href: '/newView',
			value: 'mdi-folder-plus'
		}, {
			pos: 'left',
			href: '/ws/',
			value: 'mdi-folder-open'
		}, {
			pos: 'table',
			value: 'mdi-folder-open-outline _th_link'
		}, {
			pos: 'main',
			value: 'mdi-folder-open'
		}],
		'folder-delete.png': 'mdi-delete-circle _th_red',
		'up.png': 'mdi-arrow-up-thick',
		'setting.png': 'mdi-application-cog',
		'edit-delete.png': [{
			pos: 'left',
			href: '/confirmDelete',
			value: 'mdi-text-box-remove _th_red'
		}, {
			pos: 'left',
			href: 'delete',
			value: 'mdi-folder-remove _th_red'
		}, {
			pos: 'left',
			href: '#',
			value: 'mdi-text-box-remove _th_red'
		}],
		'credentials.png': 'mdi-key-chain',
		'clock.png': 'mdi-motion-play',
		'star.png': 'mdi-star-outline',
		'move.png': 'mdi-file-move',
		'terminal.png': [{
			pos: 'left',
			value: 'mdi-clipboard-text-outline'
		}, {
			pos: 'main',
			value: 'mdi-powershell'
		}],
		'clipboard.png': 'mdi-clipboard-flow-outline',
		'git-32x32.png': 'mdi-git',
		'git-48x48.png': 'mdi-git',
		'save.png': [{
			pos: 'left',
			href: '/tagBuild',
			value: 'mdi-tag-multiple-outline'
		}],
		'previous.png': 'mdi-arrow-left-circle',
		'next.png': [{
			pos: 'left',
			href: '/emailexttemplates',
			value: 'mdi-text-box-multiple'
		}],
		'document.png': 'mdi-text-box-outline',

		'grey_anime.gif': 'mdi-loading mdi-spin',
		'grey.png': 'mdi-web',
		'blue.png': 'mdi-check-circle _th_green',
		'red.png': 'mdi-close-octagon _th_red',
		'yellow.png': 'mdi-alert-decagram-outline _th_yellow',
		'health-60to79.png': 'mdi-weather-partly-cloudy',
		'health-80plus.png': 'mdi-weather-sunny',
		'collapse.png': 'mdi-chevron-up',
		'expand.png': 'mdi-chevron-down',
		'atom.gif': 'mdi-rss-box',

		'plugin.png': 'mdi-puzzle',
		'network.png': 'mdi-server-network',
		'secure.png': 'mdi-shield-account',
		'computer.png': 'mdi-information',
		'monitor.png': 'mdi-clipboard-pulse',
		'help.png': 'mdi-help-box',
		'refresh.png': 'mdi-cog-refresh',
		'system-log-out.png': 'mdi-remote-desktop',
		'mail-mark-read.png': 'mdi-email-multiple',
		'orange-square.png': 'mdi-account-circle-outline',
		'spinner.gif': 'mdi-vanish-quarter mdi-spin',
		'new-credential.png': 'mdi-key-plus',
		'none.gif': 'mdi-blank',
		'system-store.png': 'mdi-home-lock',
		'copyright-vertical.png': 'SKIP',
		'select-all.png': 'mdi-checkbox-multiple-marked-outline',
		'unselect-all.png': 'mdi-checkbox-multiple-blank-outline',
		'stop.png': 'mdi-close-box _th_red',
		'ssh-key.png': 'mdi-file-key-outline',
		'userpass.png': 'mdi-account-key',
		'domain.png': 'mdi-web-box',
	};

	// theme entry
	function init_theme($) {
		theme_left($);
		theme_table($);
		theme_history($);
		theme_rss($);
		theme_main($);
	}

	// left menu
	function theme_left($) {
		$('#tasks img').each(function() {
			prc_img($(this), 'left');
		});

	}

	// job table
	function theme_table($) {
		$('#projectstatus img').each(function() {
			prc_img($(this), 'table');
		});

		$('#projectstatus .icon-fav-inactive').each(function() {
			let img = $(this);
			let pt = img.parent();

			let icon = mapping('star.png', 'table');
			let sz = img.height();

			img.replaceWith(`<span class="mdi mdi-${sz}px ${icon}"></span>`);
		});
	}

	// build history
	function theme_history($) {
		$('#buildHistory img').each(function() {
			prc_img($(this), 'history');
		});
		// dynamic replace img when building
		$('#buildHistory').on('DOMSubtreeModified', (e) => {
			if (e.target.tagName.toLowerCase() == 'tbody' && $('#buildHistory img').length) {
				prc_img($($('#buildHistory img')[0]), 'history');
			}
		})

	}

	function theme_rss($) {
		$('#rss-bar img').each(function() {
			prc_img($(this), '');
		});
	}

	// other form
	function theme_main($) {
		$('.manage-option img').each(function() {
			prc_img($(this), 'main', 'icon');
		});
		$('#main-panel img').each(function() {
			prc_img($(this), 'main');
		});
		// replace some lazy img
		$('#main-panel').on('DOMSubtreeModified', () => {
			let imgs = $('#main-panel img');
			if (imgs.length) {
				prc_img($(imgs[0]), 'main');
			}
		})
	}

	// replace img to span.mdi-xxx
	function prc_img(img, pos, clazz) {
		let pt = img.parent();

		let src = img.attr('src');
		let file = src.substr(src.lastIndexOf('/') + 1);

		let icon = mapping(file, pos, pt.attr('href'));
		let sz = img.height(); // use original size
		if (icon && icon != 'SKIP') {
			img.replaceWith(`<span class="mdi mdi-${sz}px ${icon} ${clazz||''}"></span>`);
		}
	}

	// find a mdi class by filename/pos/href
	function mapping(img, pos, href) {
		let l1 = MMP[img];

		// skip dynamic image
		if (img.includes('?')) {
			return '';
		}
		// miss config 1
		if (!l1) {
			console.warn('MAP MIS1:', img, pos);
			return '';
		}

		if (typeof(l1) == 'string') {
			return l1;
		}

		let params = [{
			key: 'pos',
			value: pos || ''
		}, {
			key: 'href',
			value: href || ''
		}];
		
		let rst = l1;
		for (let prm of params) {
			// match by 'endsWith'
			nxt = rst.filter(v => !v[prm.key] || prm.value.endsWith(v[prm.key]));
			if (!nxt.length) {
				// miss config 2
				console.warn(`MAP MIS: ${img} on ${prm.key}=${prm.value}`);
				return '';
			} else if (nxt.length == 1) {
				return nxt[0].value;
			}
			rst = nxt;
		}

		// match multiple icon
		console.warn('MAP MULTI:', img, pos, href);
		return '';
	}

	document.addEventListener("DOMContentLoaded", function() {
		// this is jquery library, I found it from the buildin verdor
		// by default it's overrided by prototype.js
		// so I load it myself
		webpackJsonp[0][1][0](window);

		// process conflict
		window.jQuery.noConflict();

		init_theme(jQuery);
	});
})();