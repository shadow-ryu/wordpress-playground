var m = './wp-6.3-8914fd7a.data';
const j = 11107036,
	z = 'twentytwentythree';
function E(h) {
	return new Promise(function (F, v) {
		function dThrow(l) {
			const o = new Error(
				`Failed to load data dependency module "${m}"${
					typeof l == 'string' ? ` (${l})` : ''
				}`
			);
			(o.cause = l instanceof Error ? l : null), v(o);
		}
		var e = typeof h < 'u' ? h : {};
		e.expectedDataFileDownloads || (e.expectedDataFileDownloads = 0),
			e.expectedDataFileDownloads++,
			(function () {
				if (!e.ENVIRONMENT_IS_PTHREAD) {
					var l = function (o) {
						typeof window == 'object'
							? window.encodeURIComponent(
									window.location.pathname
										.toString()
										.substring(
											0,
											window.location.pathname
												.toString()
												.lastIndexOf('/')
										) + '/'
							  )
							: typeof process > 'u' &&
							  typeof location < 'u' &&
							  encodeURIComponent(
									location.pathname
										.toString()
										.substring(
											0,
											location.pathname
												.toString()
												.lastIndexOf('/')
										) + '/'
							  );
						var C = m,
							b = m;
						typeof e.locateFilePackage == 'function' &&
							!e.locateFile &&
							((e.locateFile = e.locateFilePackage),
							err(
								'warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)'
							));
						var k = e.locateFile ? e.locateFile(b, '') : b,
							g = o.remote_package_size;
						function q(p, c, a, d) {
							var t = new XMLHttpRequest();
							t.open('GET', p, !0),
								(t.responseType = 'arraybuffer'),
								(t.onprogress = function (s) {
									var r = p,
										i = c;
									if ((s.total && (i = s.total), s.loaded)) {
										t.addedTotal
											? (e.dataFileDownloads[r].loaded =
													s.loaded)
											: ((t.addedTotal = !0),
											  e.dataFileDownloads ||
													(e.dataFileDownloads = {}),
											  (e.dataFileDownloads[r] = {
													loaded: s.loaded,
													total: i,
											  }));
										var n = 0,
											_ = 0,
											S = 0;
										for (var R in e.dataFileDownloads) {
											var P = e.dataFileDownloads[R];
											(n += P.total),
												(_ += P.loaded),
												S++;
										}
										(n = Math.ceil(
											(n * e.expectedDataFileDownloads) /
												S
										)),
											e.setStatus &&
												e.setStatus(
													'Downloading data... (' +
														_ +
														'/' +
														n +
														')'
												);
									} else
										e.dataFileDownloads ||
											(e.setStatus &&
												e.setStatus(
													'Downloading data...'
												));
								}),
								(t.onerror = dThrow),
								(t.onload = function (s) {
									if (
										t.status == 200 ||
										t.status == 304 ||
										t.status == 206 ||
										(t.status == 0 && t.response)
									) {
										var r = t.response;
										a(r);
									} else dThrow(s);
								}),
								t.send(null);
						}
						var u = null,
							w = e.getPreloadedPackage
								? e.getPreloadedPackage(k, g)
								: null;
						w ||
							q(k, g, function (p) {
								u ? (u(p), (u = null)) : (w = p);
							});
						function y() {
							x(), F();
						}
						function x() {
							function p(s, r) {
								if (!s) throw r + new Error().stack;
							}
							e.FS_createPath('/', 'wordpress', !0, !0),
								e.FS_createPath(
									'/wordpress',
									'wp-admin',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-admin',
									'includes',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-admin',
									'maint',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-admin',
									'network',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-admin',
									'user',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress',
									'wp-content',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content',
									'database',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content',
									'mu-plugins',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content',
									'plugins',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/plugins',
									'akismet',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/plugins/akismet',
									'views',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/plugins',
									'sqlite-database-integration',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/plugins/sqlite-database-integration',
									'tests',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/plugins/sqlite-database-integration',
									'wp-includes',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/plugins/sqlite-database-integration/wp-includes',
									'sqlite',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/plugins',
									'wordpress-importer',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/plugins/wordpress-importer',
									'.wordpress-org',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/plugins/wordpress-importer',
									'src',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/plugins/wordpress-importer/src',
									'parsers',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content',
									'themes',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/themes',
									'twentytwentythree',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/themes/twentytwentythree',
									'parts',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/themes/twentytwentythree',
									'patterns',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/themes/twentytwentythree',
									'styles',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-content/themes/twentytwentythree',
									'templates',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress',
									'wp-includes',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'ID3',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'IXR',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'PHPMailer',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'Requests',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests',
									'library',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests',
									'src',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests/src',
									'Auth',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests/src',
									'Cookie',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests/src',
									'Exception',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests/src/Exception',
									'Http',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests/src/Exception',
									'Transport',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests/src',
									'Proxy',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests/src',
									'Response',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests/src',
									'Transport',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Requests/src',
									'Utility',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'SimplePie',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/SimplePie',
									'Cache',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/SimplePie',
									'Content',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/SimplePie/Content',
									'Type',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/SimplePie',
									'Decode',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/SimplePie/Decode',
									'HTML',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/SimplePie',
									'HTTP',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/SimplePie',
									'Net',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/SimplePie',
									'Parse',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/SimplePie',
									'XML',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/SimplePie/XML',
									'Declaration',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'Text',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Text',
									'Diff',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Text/Diff',
									'Engine',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/Text/Diff',
									'Renderer',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'assets',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'block-patterns',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'block-supports',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'blocks',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'archives',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'audio',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'avatar',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'block',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'button',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'buttons',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'calendar',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'categories',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'code',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'column',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'columns',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comment-author-name',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comment-content',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comment-date',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comment-edit-link',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comment-reply-link',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comment-template',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comments-pagination-next',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comments-pagination-numbers',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comments-pagination-previous',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comments-pagination',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comments-title',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'comments',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'cover',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'details',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'embed',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'file',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'footnotes',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'freeform',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'gallery',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'group',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'heading',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'home-link',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'html',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'image',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'latest-comments',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'latest-posts',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'legacy-widget',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'list-item',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'list',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'loginout',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'media-text',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'missing',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'more',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'navigation-link',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'navigation-submenu',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'navigation',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'nextpage',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'page-list-item',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'page-list',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'paragraph',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'pattern',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-author-biography',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-author-name',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-author',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-comments-form',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-content',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-date',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-excerpt',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-featured-image',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-navigation-link',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-template',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-terms',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'post-title',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'preformatted',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'pullquote',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'query-no-results',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'query-pagination-next',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'query-pagination-numbers',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'query-pagination-previous',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'query-pagination',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'query-title',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'query',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'quote',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'read-more',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'rss',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'search',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'separator',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'shortcode',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'site-logo',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'site-tagline',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'site-title',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'social-link',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'social-links',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'spacer',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'table',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'tag-cloud',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'template-part',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'term-description',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'text-columns',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'verse',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'video',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/blocks',
									'widget-group',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'certificates',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'customize',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'html-api',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'js',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/js',
									'tinymce',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'php-compat',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'pomo',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'rest-api',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/rest-api',
									'endpoints',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/rest-api',
									'fields',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/rest-api',
									'search',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'sitemaps',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sitemaps',
									'providers',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'sodium_compat',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat',
									'lib',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat',
									'namespaced',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/namespaced',
									'Core',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/namespaced/Core',
									'ChaCha20',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/namespaced/Core',
									'Curve25519',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Curve25519',
									'Ge',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/namespaced/Core',
									'Poly1305',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat',
									'src',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src',
									'Core',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core',
									'Base64',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core',
									'ChaCha20',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core',
									'Curve25519',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core/Curve25519',
									'Ge',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core',
									'Poly1305',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core',
									'SecretStream',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src',
									'Core32',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core32',
									'ChaCha20',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core32',
									'Curve25519',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core32/Curve25519',
									'Ge',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core32',
									'Poly1305',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src/Core32',
									'SecretStream',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes/sodium_compat/src',
									'PHP52',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'style-engine',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'theme-compat',
									!0,
									!0
								),
								e.FS_createPath(
									'/wordpress/wp-includes',
									'widgets',
									!0,
									!0
								);
							function c(s, r, i) {
								(this.start = s),
									(this.end = r),
									(this.audio = i);
							}
							c.prototype = {
								requests: {},
								open: function (s, r) {
									(this.name = r),
										(this.requests[r] = this),
										e.addRunDependency('fp ' + this.name);
								},
								send: function () {},
								onload: function () {
									var s = this.byteArray.subarray(
										this.start,
										this.end
									);
									this.finish(s);
								},
								finish: function (s) {
									var r = this;
									e.FS_createDataFile(
										this.name,
										null,
										s,
										!0,
										!0,
										!0
									),
										e.removeRunDependency('fp ' + r.name),
										(this.requests[this.name] = null);
								},
							};
							for (var a = o.files, d = 0; d < a.length; ++d)
								new c(
									a[d].start,
									a[d].end,
									a[d].audio || 0
								).open('GET', a[d].filename);
							function t(s) {
								p(s, 'Loading data file failed.'),
									p(
										s.constructor.name === ArrayBuffer.name,
										'bad input to processPackageData'
									);
								var r = new Uint8Array(s);
								c.prototype.byteArray = r;
								for (var i = o.files, n = 0; n < i.length; ++n)
									c.prototype.requests[
										i[n].filename
									].onload();
								e.removeRunDependency(m);
							}
							e.addRunDependency(m),
								e.preloadResults || (e.preloadResults = {}),
								(e.preloadResults[C] = { fromCache: !1 }),
								w ? (t(w), (w = null)) : (u = t);
						}
						e.calledRun
							? y()
							: (e.preRun || (e.preRun = []), e.preRun.push(y));
					};
					l({
						files: [
							{
								filename: '/wordpress/debug.txt',
								start: 0,
								end: 4214,
							},
							{
								filename: '/wordpress/index.php',
								start: 4214,
								end: 4295,
							},
							{
								filename: '/wordpress/readme.html',
								start: 4295,
								end: 11694,
							},
							{
								filename: '/wordpress/wp-activate.php',
								start: 11694,
								end: 17708,
							},
							{
								filename: '/wordpress/wp-admin/about.php',
								start: 17708,
								end: 39504,
							},
							{
								filename: '/wordpress/wp-admin/admin-ajax.php',
								start: 39504,
								end: 43216,
							},
							{
								filename:
									'/wordpress/wp-admin/admin-footer.php',
								start: 43216,
								end: 44396,
							},
							{
								filename:
									'/wordpress/wp-admin/admin-functions.php',
								start: 44396,
								end: 44539,
							},
							{
								filename:
									'/wordpress/wp-admin/admin-header.php',
								start: 44539,
								end: 49954,
							},
							{
								filename: '/wordpress/wp-admin/admin-post.php',
								start: 49954,
								end: 50801,
							},
							{
								filename: '/wordpress/wp-admin/admin.php',
								start: 50801,
								end: 56755,
							},
							{
								filename:
									'/wordpress/wp-admin/async-upload.php',
								start: 56755,
								end: 60421,
							},
							{
								filename:
									'/wordpress/wp-admin/authorize-application.php',
								start: 60421,
								end: 67953,
							},
							{
								filename: '/wordpress/wp-admin/comment.php',
								start: 67953,
								end: 77730,
							},
							{
								filename: '/wordpress/wp-admin/contribute.php',
								start: 77730,
								end: 83193,
							},
							{
								filename: '/wordpress/wp-admin/credits.php',
								start: 83193,
								end: 86690,
							},
							{
								filename:
									'/wordpress/wp-admin/custom-background.php',
								start: 86690,
								end: 86869,
							},
							{
								filename:
									'/wordpress/wp-admin/custom-header.php',
								start: 86869,
								end: 87052,
							},
							{
								filename: '/wordpress/wp-admin/customize.php',
								start: 87052,
								end: 95941,
							},
							{
								filename:
									'/wordpress/wp-admin/edit-comments.php',
								start: 95941,
								end: 108621,
							},
							{
								filename:
									'/wordpress/wp-admin/edit-form-advanced.php',
								start: 108621,
								end: 132594,
							},
							{
								filename:
									'/wordpress/wp-admin/edit-form-blocks.php',
								start: 132594,
								end: 140407,
							},
							{
								filename:
									'/wordpress/wp-admin/edit-form-comment.php',
								start: 140407,
								end: 147594,
							},
							{
								filename:
									'/wordpress/wp-admin/edit-link-form.php',
								start: 147594,
								end: 153121,
							},
							{
								filename:
									'/wordpress/wp-admin/edit-tag-form.php',
								start: 153121,
								end: 159104,
							},
							{
								filename: '/wordpress/wp-admin/edit-tags.php',
								start: 159104,
								end: 175561,
							},
							{
								filename: '/wordpress/wp-admin/edit.php',
								start: 175561,
								end: 191662,
							},
							{
								filename:
									'/wordpress/wp-admin/erase-personal-data.php',
								start: 191662,
								end: 198604,
							},
							{
								filename:
									'/wordpress/wp-admin/export-personal-data.php',
								start: 198604,
								end: 205951,
							},
							{
								filename: '/wordpress/wp-admin/export.php',
								start: 205951,
								end: 215812,
							},
							{
								filename: '/wordpress/wp-admin/freedoms.php',
								start: 215812,
								end: 219827,
							},
							{
								filename: '/wordpress/wp-admin/import.php',
								start: 219827,
								end: 225707,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/admin-filters.php',
								start: 225707,
								end: 232619,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/admin.php',
								start: 232619,
								end: 234761,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/ajax-actions.php',
								start: 234761,
								end: 346315,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/bookmark.php',
								start: 346315,
								end: 353018,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-automatic-upgrader-skin.php',
								start: 353018,
								end: 354289,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-bulk-plugin-upgrader-skin.php',
								start: 354289,
								end: 355429,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-bulk-theme-upgrader-skin.php',
								start: 355429,
								end: 356617,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-bulk-upgrader-skin.php',
								start: 356617,
								end: 360751,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-core-upgrader.php',
								start: 360751,
								end: 369518,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-custom-background.php',
								start: 369518,
								end: 387288,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-custom-image-header.php',
								start: 387288,
								end: 424848,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-file-upload-upgrader.php',
								start: 424848,
								end: 426623,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-ftp-pure.php',
								start: 426623,
								end: 430738,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-ftp-sockets.php',
								start: 430738,
								end: 437739,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-ftp.php',
								start: 437739,
								end: 460792,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-language-pack-upgrader-skin.php',
								start: 460792,
								end: 462258,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-language-pack-upgrader.php',
								start: 462258,
								end: 471228,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-pclzip.php',
								start: 471228,
								end: 560230,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-plugin-installer-skin.php',
								start: 560230,
								end: 568771,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-plugin-upgrader-skin.php',
								start: 568771,
								end: 570616,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-plugin-upgrader.php',
								start: 570616,
								end: 582480,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-theme-installer-skin.php',
								start: 582480,
								end: 591654,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-theme-upgrader-skin.php',
								start: 591654,
								end: 594319,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-theme-upgrader.php',
								start: 594319,
								end: 609167,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-walker-category-checklist.php',
								start: 609167,
								end: 611421,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-walker-nav-menu-checklist.php',
								start: 611421,
								end: 615075,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-walker-nav-menu-edit.php',
								start: 615075,
								end: 625223,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-ajax-upgrader-skin.php',
								start: 625223,
								end: 627010,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-application-passwords-list-table.php',
								start: 627010,
								end: 630695,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-automatic-updater.php',
								start: 630695,
								end: 660108,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-comments-list-table.php',
								start: 660108,
								end: 682310,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-community-events.php',
								start: 682310,
								end: 689682,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-debug-data.php',
								start: 689682,
								end: 734118,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-filesystem-base.php',
								start: 734118,
								end: 741690,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-filesystem-direct.php',
								start: 741690,
								end: 748501,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-filesystem-ftpext.php',
								start: 748501,
								end: 758672,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-filesystem-ftpsockets.php',
								start: 758672,
								end: 765886,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-filesystem-ssh2.php',
								start: 765886,
								end: 775660,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-importer.php',
								start: 775660,
								end: 780324,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-internal-pointers.php',
								start: 780324,
								end: 782726,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-links-list-table.php',
								start: 782726,
								end: 787853,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-list-table-compat.php',
								start: 787853,
								end: 788581,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-list-table.php',
								start: 788581,
								end: 817833,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-media-list-table.php',
								start: 817833,
								end: 835066,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-ms-sites-list-table.php',
								start: 835066,
								end: 848514,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-ms-themes-list-table.php',
								start: 848514,
								end: 866263,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-ms-users-list-table.php',
								start: 866263,
								end: 875606,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-plugin-install-list-table.php',
								start: 875606,
								end: 892503,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-plugins-list-table.php',
								start: 892503,
								end: 921155,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-post-comments-list-table.php',
								start: 921155,
								end: 922113,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-posts-list-table.php',
								start: 922113,
								end: 964038,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-privacy-data-export-requests-list-table.php',
								start: 964038,
								end: 968245,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-privacy-data-removal-requests-list-table.php',
								start: 968245,
								end: 972462,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-privacy-policy-content.php',
								start: 972462,
								end: 995873,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-privacy-requests-table.php',
								start: 995873,
								end: 1004168,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-screen.php',
								start: 1004168,
								end: 1024205,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-site-health-auto-updates.php',
								start: 1024205,
								end: 1032699,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-site-health.php',
								start: 1032699,
								end: 1112717,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-site-icon.php',
								start: 1112717,
								end: 1115354,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-terms-list-table.php',
								start: 1115354,
								end: 1128181,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-theme-install-list-table.php',
								start: 1128181,
								end: 1138323,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-themes-list-table.php',
								start: 1138323,
								end: 1146078,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-upgrader-skin.php',
								start: 1146078,
								end: 1149169,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-upgrader-skins.php',
								start: 1149169,
								end: 1150091,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-upgrader.php',
								start: 1150091,
								end: 1170442,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/class-wp-users-list-table.php',
								start: 1170442,
								end: 1182015,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/comment.php',
								start: 1182015,
								end: 1185851,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/continents-cities.php',
								start: 1185851,
								end: 1206157,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/credits.php',
								start: 1206157,
								end: 1209944,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/dashboard.php',
								start: 1209944,
								end: 1257910,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/deprecated.php',
								start: 1257910,
								end: 1278110,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/edit-tag-messages.php',
								start: 1278110,
								end: 1279212,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/export.php',
								start: 1279212,
								end: 1294724,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/file.php',
								start: 1294724,
								end: 1345925,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/image-edit.php',
								start: 1345925,
								end: 1378274,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/image.php',
								start: 1378274,
								end: 1397215,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/import.php',
								start: 1397215,
								end: 1401469,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/list-table.php',
								start: 1401469,
								end: 1403324,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/media.php',
								start: 1403324,
								end: 1487565,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/menu.php',
								start: 1487565,
								end: 1492918,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/meta-boxes.php',
								start: 1492918,
								end: 1540829,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/misc.php',
								start: 1540829,
								end: 1568213,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/ms-admin-filters.php',
								start: 1568213,
								end: 1569233,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/ms-deprecated.php',
								start: 1569233,
								end: 1570862,
							},
							{
								filename: '/wordpress/wp-admin/includes/ms.php',
								start: 1570862,
								end: 1593815,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/nav-menu.php',
								start: 1593815,
								end: 1630010,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/network.php',
								start: 1630010,
								end: 1651769,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/noop.php',
								start: 1651769,
								end: 1652367,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/options.php',
								start: 1652367,
								end: 1656096,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/plugin-install.php',
								start: 1656096,
								end: 1677674,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/plugin.php',
								start: 1677674,
								end: 1718023,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/post.php',
								start: 1718023,
								end: 1769928,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/privacy-tools.php',
								start: 1769928,
								end: 1789480,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/revision.php',
								start: 1789480,
								end: 1799379,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/schema.php',
								start: 1799379,
								end: 1830304,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/screen.php',
								start: 1830304,
								end: 1833315,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/taxonomy.php',
								start: 1833315,
								end: 1837135,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/template.php',
								start: 1837135,
								end: 1892027,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/theme-install.php',
								start: 1892027,
								end: 1897432,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/theme.php',
								start: 1897432,
								end: 1923912,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/translation-install.php',
								start: 1923912,
								end: 1929808,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/update-core.php',
								start: 1929808,
								end: 1983666,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/update.php',
								start: 1983666,
								end: 2005632,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/upgrade.php',
								start: 2005632,
								end: 2076784,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/user.php',
								start: 2076784,
								end: 2090029,
							},
							{
								filename:
									'/wordpress/wp-admin/includes/widgets.php',
								start: 2090029,
								end: 2098729,
							},
							{
								filename: '/wordpress/wp-admin/index.php',
								start: 2098729,
								end: 2105328,
							},
							{
								filename:
									'/wordpress/wp-admin/install-helper.php',
								start: 2105328,
								end: 2107256,
							},
							{
								filename: '/wordpress/wp-admin/install.php',
								start: 2107256,
								end: 2121684,
							},
							{
								filename: '/wordpress/wp-admin/link-add.php',
								start: 2121684,
								end: 2122235,
							},
							{
								filename:
									'/wordpress/wp-admin/link-manager.php',
								start: 2122235,
								end: 2125906,
							},
							{
								filename:
									'/wordpress/wp-admin/link-parse-opml.php',
								start: 2125906,
								end: 2127328,
							},
							{
								filename: '/wordpress/wp-admin/link.php',
								start: 2127328,
								end: 2129298,
							},
							{
								filename:
									'/wordpress/wp-admin/load-scripts.php',
								start: 2129298,
								end: 2130828,
							},
							{
								filename: '/wordpress/wp-admin/load-styles.php',
								start: 2130828,
								end: 2133085,
							},
							{
								filename:
									'/wordpress/wp-admin/maint/repair.php',
								start: 2133085,
								end: 2138955,
							},
							{
								filename: '/wordpress/wp-admin/media-new.php',
								start: 2138955,
								end: 2141812,
							},
							{
								filename:
									'/wordpress/wp-admin/media-upload.php',
								start: 2141812,
								end: 2143332,
							},
							{
								filename: '/wordpress/wp-admin/media.php',
								start: 2143332,
								end: 2143832,
							},
							{
								filename: '/wordpress/wp-admin/menu-header.php',
								start: 2143832,
								end: 2151013,
							},
							{
								filename: '/wordpress/wp-admin/menu.php',
								start: 2151013,
								end: 2165268,
							},
							{
								filename: '/wordpress/wp-admin/moderation.php',
								start: 2165268,
								end: 2165405,
							},
							{
								filename: '/wordpress/wp-admin/ms-admin.php',
								start: 2165405,
								end: 2165491,
							},
							{
								filename:
									'/wordpress/wp-admin/ms-delete-site.php',
								start: 2165491,
								end: 2169062,
							},
							{
								filename: '/wordpress/wp-admin/ms-edit.php',
								start: 2169062,
								end: 2169148,
							},
							{
								filename: '/wordpress/wp-admin/ms-options.php',
								start: 2169148,
								end: 2169244,
							},
							{
								filename: '/wordpress/wp-admin/ms-sites.php',
								start: 2169244,
								end: 2169343,
							},
							{
								filename: '/wordpress/wp-admin/ms-themes.php',
								start: 2169343,
								end: 2169443,
							},
							{
								filename:
									'/wordpress/wp-admin/ms-upgrade-network.php',
								start: 2169443,
								end: 2169544,
							},
							{
								filename: '/wordpress/wp-admin/ms-users.php',
								start: 2169544,
								end: 2169643,
							},
							{
								filename: '/wordpress/wp-admin/my-sites.php',
								start: 2169643,
								end: 2173238,
							},
							{
								filename: '/wordpress/wp-admin/nav-menus.php',
								start: 2173238,
								end: 2212698,
							},
							{
								filename: '/wordpress/wp-admin/network.php',
								start: 2212698,
								end: 2217564,
							},
							{
								filename:
									'/wordpress/wp-admin/network/about.php',
								start: 2217564,
								end: 2217648,
							},
							{
								filename:
									'/wordpress/wp-admin/network/admin.php',
								start: 2217648,
								end: 2218233,
							},
							{
								filename:
									'/wordpress/wp-admin/network/contribute.php',
								start: 2218233,
								end: 2218322,
							},
							{
								filename:
									'/wordpress/wp-admin/network/credits.php',
								start: 2218322,
								end: 2218408,
							},
							{
								filename:
									'/wordpress/wp-admin/network/edit.php',
								start: 2218408,
								end: 2218702,
							},
							{
								filename:
									'/wordpress/wp-admin/network/freedoms.php',
								start: 2218702,
								end: 2218789,
							},
							{
								filename:
									'/wordpress/wp-admin/network/index.php',
								start: 2218789,
								end: 2221409,
							},
							{
								filename:
									'/wordpress/wp-admin/network/menu.php',
								start: 2221409,
								end: 2225629,
							},
							{
								filename:
									'/wordpress/wp-admin/network/plugin-editor.php',
								start: 2225629,
								end: 2225721,
							},
							{
								filename:
									'/wordpress/wp-admin/network/plugin-install.php',
								start: 2225721,
								end: 2225926,
							},
							{
								filename:
									'/wordpress/wp-admin/network/plugins.php',
								start: 2225926,
								end: 2226012,
							},
							{
								filename:
									'/wordpress/wp-admin/network/privacy.php',
								start: 2226012,
								end: 2226098,
							},
							{
								filename:
									'/wordpress/wp-admin/network/profile.php',
								start: 2226098,
								end: 2226184,
							},
							{
								filename:
									'/wordpress/wp-admin/network/settings.php',
								start: 2226184,
								end: 2245327,
							},
							{
								filename:
									'/wordpress/wp-admin/network/setup.php',
								start: 2245327,
								end: 2245413,
							},
							{
								filename:
									'/wordpress/wp-admin/network/site-info.php',
								start: 2245413,
								end: 2251571,
							},
							{
								filename:
									'/wordpress/wp-admin/network/site-new.php',
								start: 2251571,
								end: 2259438,
							},
							{
								filename:
									'/wordpress/wp-admin/network/site-settings.php',
								start: 2259438,
								end: 2264041,
							},
							{
								filename:
									'/wordpress/wp-admin/network/site-themes.php',
								start: 2264041,
								end: 2269352,
							},
							{
								filename:
									'/wordpress/wp-admin/network/site-users.php',
								start: 2269352,
								end: 2279232,
							},
							{
								filename:
									'/wordpress/wp-admin/network/sites.php',
								start: 2279232,
								end: 2289917,
							},
							{
								filename:
									'/wordpress/wp-admin/network/theme-editor.php',
								start: 2289917,
								end: 2290008,
							},
							{
								filename:
									'/wordpress/wp-admin/network/theme-install.php',
								start: 2290008,
								end: 2290211,
							},
							{
								filename:
									'/wordpress/wp-admin/network/themes.php',
								start: 2290211,
								end: 2304509,
							},
							{
								filename:
									'/wordpress/wp-admin/network/update-core.php',
								start: 2304509,
								end: 2304599,
							},
							{
								filename:
									'/wordpress/wp-admin/network/update.php',
								start: 2304599,
								end: 2304864,
							},
							{
								filename:
									'/wordpress/wp-admin/network/upgrade.php',
								start: 2304864,
								end: 2308667,
							},
							{
								filename:
									'/wordpress/wp-admin/network/user-edit.php',
								start: 2308667,
								end: 2308755,
							},
							{
								filename:
									'/wordpress/wp-admin/network/user-new.php',
								start: 2308755,
								end: 2313201,
							},
							{
								filename:
									'/wordpress/wp-admin/network/users.php',
								start: 2313201,
								end: 2320928,
							},
							{
								filename:
									'/wordpress/wp-admin/options-discussion.php',
								start: 2320928,
								end: 2334519,
							},
							{
								filename:
									'/wordpress/wp-admin/options-general.php',
								start: 2334519,
								end: 2349107,
							},
							{
								filename:
									'/wordpress/wp-admin/options-head.php',
								start: 2349107,
								end: 2349321,
							},
							{
								filename:
									'/wordpress/wp-admin/options-media.php',
								start: 2349321,
								end: 2355198,
							},
							{
								filename:
									'/wordpress/wp-admin/options-permalink.php',
								start: 2355198,
								end: 2373710,
							},
							{
								filename:
									'/wordpress/wp-admin/options-privacy.php',
								start: 2373710,
								end: 2382191,
							},
							{
								filename:
									'/wordpress/wp-admin/options-reading.php',
								start: 2382191,
								end: 2390813,
							},
							{
								filename:
									'/wordpress/wp-admin/options-writing.php',
								start: 2390813,
								end: 2398983,
							},
							{
								filename: '/wordpress/wp-admin/options.php',
								start: 2398983,
								end: 2408696,
							},
							{
								filename:
									'/wordpress/wp-admin/plugin-editor.php',
								start: 2408696,
								end: 2420982,
							},
							{
								filename:
									'/wordpress/wp-admin/plugin-install.php',
								start: 2420982,
								end: 2425772,
							},
							{
								filename: '/wordpress/wp-admin/plugins.php',
								start: 2425772,
								end: 2450405,
							},
							{
								filename: '/wordpress/wp-admin/post-new.php',
								start: 2450405,
								end: 2452477,
							},
							{
								filename: '/wordpress/wp-admin/post.php',
								start: 2452477,
								end: 2460737,
							},
							{
								filename: '/wordpress/wp-admin/press-this.php',
								start: 2460737,
								end: 2462653,
							},
							{
								filename:
									'/wordpress/wp-admin/privacy-policy-guide.php',
								start: 2462653,
								end: 2466023,
							},
							{
								filename: '/wordpress/wp-admin/privacy.php',
								start: 2466023,
								end: 2468236,
							},
							{
								filename: '/wordpress/wp-admin/profile.php',
								start: 2468236,
								end: 2468319,
							},
							{
								filename: '/wordpress/wp-admin/revision.php',
								start: 2468319,
								end: 2472475,
							},
							{
								filename:
									'/wordpress/wp-admin/setup-config.php',
								start: 2472475,
								end: 2486711,
							},
							{
								filename: '/wordpress/wp-admin/site-editor.php',
								start: 2486711,
								end: 2491637,
							},
							{
								filename:
									'/wordpress/wp-admin/site-health-info.php',
								start: 2491637,
								end: 2495274,
							},
							{
								filename: '/wordpress/wp-admin/site-health.php',
								start: 2495274,
								end: 2503681,
							},
							{
								filename: '/wordpress/wp-admin/term.php',
								start: 2503681,
								end: 2505615,
							},
							{
								filename:
									'/wordpress/wp-admin/theme-editor.php',
								start: 2505615,
								end: 2519620,
							},
							{
								filename:
									'/wordpress/wp-admin/theme-install.php',
								start: 2519620,
								end: 2538959,
							},
							{
								filename: '/wordpress/wp-admin/themes.php',
								start: 2538959,
								end: 2578260,
							},
							{
								filename: '/wordpress/wp-admin/tools.php',
								start: 2578260,
								end: 2581029,
							},
							{
								filename: '/wordpress/wp-admin/update-core.php',
								start: 2581029,
								end: 2619173,
							},
							{
								filename: '/wordpress/wp-admin/update.php',
								start: 2619173,
								end: 2629696,
							},
							{
								filename:
									'/wordpress/wp-admin/upgrade-functions.php',
								start: 2629696,
								end: 2629843,
							},
							{
								filename: '/wordpress/wp-admin/upgrade.php',
								start: 2629843,
								end: 2634193,
							},
							{
								filename: '/wordpress/wp-admin/upload.php',
								start: 2634193,
								end: 2647691,
							},
							{
								filename: '/wordpress/wp-admin/user-edit.php',
								start: 2647691,
								end: 2679857,
							},
							{
								filename: '/wordpress/wp-admin/user-new.php',
								start: 2679857,
								end: 2700410,
							},
							{
								filename: '/wordpress/wp-admin/user/about.php',
								start: 2700410,
								end: 2700494,
							},
							{
								filename: '/wordpress/wp-admin/user/admin.php',
								start: 2700494,
								end: 2701036,
							},
							{
								filename:
									'/wordpress/wp-admin/user/credits.php',
								start: 2701036,
								end: 2701122,
							},
							{
								filename:
									'/wordpress/wp-admin/user/freedoms.php',
								start: 2701122,
								end: 2701209,
							},
							{
								filename: '/wordpress/wp-admin/user/index.php',
								start: 2701209,
								end: 2701293,
							},
							{
								filename: '/wordpress/wp-admin/user/menu.php',
								start: 2701293,
								end: 2701879,
							},
							{
								filename:
									'/wordpress/wp-admin/user/privacy.php',
								start: 2701879,
								end: 2701965,
							},
							{
								filename:
									'/wordpress/wp-admin/user/profile.php',
								start: 2701965,
								end: 2702051,
							},
							{
								filename:
									'/wordpress/wp-admin/user/user-edit.php',
								start: 2702051,
								end: 2702139,
							},
							{
								filename: '/wordpress/wp-admin/users.php',
								start: 2702139,
								end: 2721261,
							},
							{
								filename:
									'/wordpress/wp-admin/widgets-form-blocks.php',
								start: 2721261,
								end: 2723035,
							},
							{
								filename:
									'/wordpress/wp-admin/widgets-form.php',
								start: 2723035,
								end: 2740130,
							},
							{
								filename: '/wordpress/wp-admin/widgets.php',
								start: 2740130,
								end: 2741007,
							},
							{
								filename: '/wordpress/wp-blog-header.php',
								start: 2741007,
								end: 2741174,
							},
							{
								filename: '/wordpress/wp-comments-post.php',
								start: 2741174,
								end: 2742585,
							},
							{
								filename: '/wordpress/wp-config-sample.php',
								start: 2742585,
								end: 2743428,
							},
							{
								filename: '/wordpress/wp-config.php',
								start: 2743428,
								end: 2744311,
							},
							{
								filename:
									'/wordpress/wp-content/database/.ht.sqlite',
								start: 2744311,
								end: 2977783,
							},
							{
								filename:
									'/wordpress/wp-content/database/.htaccess',
								start: 2977783,
								end: 2977796,
							},
							{
								filename:
									'/wordpress/wp-content/database/index.php',
								start: 2977796,
								end: 2977804,
							},
							{
								filename: '/wordpress/wp-content/db.php',
								start: 2977804,
								end: 2978907,
							},
							{
								filename: '/wordpress/wp-content/index.php',
								start: 2978907,
								end: 2978913,
							},
							{
								filename:
									'/wordpress/wp-content/mu-plugins/export-wxz.php',
								start: 2978913,
								end: 2989391,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/akismet.php',
								start: 2989391,
								end: 2990524,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/class.akismet-admin.php',
								start: 2990524,
								end: 3031453,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/class.akismet-cli.php',
								start: 3031453,
								end: 3034486,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/class.akismet-rest-api.php',
								start: 3034486,
								end: 3042653,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/class.akismet-widget.php',
								start: 3042653,
								end: 3045505,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/class.akismet.php',
								start: 3045505,
								end: 3090371,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/index.php',
								start: 3090371,
								end: 3090377,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/activate.php',
								start: 3090377,
								end: 3090554,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/config.php',
								start: 3090554,
								end: 3104304,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/connect-jp.php',
								start: 3104304,
								end: 3108802,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/enter.php',
								start: 3108802,
								end: 3109616,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/get.php',
								start: 3109616,
								end: 3110482,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/logo.php',
								start: 3110482,
								end: 3111104,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/notice.php',
								start: 3111104,
								end: 3122457,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/predefined.php',
								start: 3122457,
								end: 3122720,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/setup.php',
								start: 3122720,
								end: 3123044,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/start.php',
								start: 3123044,
								end: 3123683,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/stats.php',
								start: 3123683,
								end: 3124594,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/views/title.php',
								start: 3124594,
								end: 3124719,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/akismet/wrapper.php',
								start: 3124719,
								end: 3131018,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/hello.php',
								start: 3131018,
								end: 3132753,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/index.php',
								start: 3132753,
								end: 3132759,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/.editorconfig',
								start: 3132759,
								end: 3133213,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/.gitattributes',
								start: 3133213,
								end: 3133498,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/.gitignore',
								start: 3133498,
								end: 3133549,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/LICENSE',
								start: 3133549,
								end: 3151641,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/activate.php',
								start: 3151641,
								end: 3153502,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/admin-notices.php',
								start: 3153502,
								end: 3155428,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/admin-page.php',
								start: 3155428,
								end: 3160840,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/composer.json',
								start: 3160840,
								end: 3161605,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/constants.php',
								start: 3161605,
								end: 3162278,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/db.copy',
								start: 3162278,
								end: 3164320,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/deactivate.php',
								start: 3164320,
								end: 3165818,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/health-check.php',
								start: 3165818,
								end: 3168009,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/load.php',
								start: 3168009,
								end: 3168269,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/phpcs.xml.dist',
								start: 3168269,
								end: 3169562,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/phpunit.xml.dist',
								start: 3169562,
								end: 3170197,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/tests/WP_SQLite_Metadata_Tests.php',
								start: 3170197,
								end: 3176698,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/tests/WP_SQLite_PDO_User_Defined_Functions_Tests.php',
								start: 3176698,
								end: 3177199,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/tests/WP_SQLite_Query_RewriterTests.php',
								start: 3177199,
								end: 3179452,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/tests/WP_SQLite_Query_Tests.php',
								start: 3179452,
								end: 3194545,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/tests/WP_SQLite_Translator_Tests.php',
								start: 3194545,
								end: 3244472,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/tests/bootstrap.php',
								start: 3244472,
								end: 3246098,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/tests/wp-sqlite-schema.php',
								start: 3246098,
								end: 3254279,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/wp-includes/sqlite/class-wp-sqlite-crosscheck-db.php',
								start: 3254279,
								end: 3257280,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/wp-includes/sqlite/class-wp-sqlite-db.php',
								start: 3257280,
								end: 3261079,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/wp-includes/sqlite/class-wp-sqlite-lexer.php',
								start: 3261079,
								end: 3301904,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/wp-includes/sqlite/class-wp-sqlite-pdo-user-defined-functions.php',
								start: 3301904,
								end: 3307526,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/wp-includes/sqlite/class-wp-sqlite-query-rewriter.php',
								start: 3307526,
								end: 3311213,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/wp-includes/sqlite/class-wp-sqlite-token.php',
								start: 3311213,
								end: 3314750,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/wp-includes/sqlite/class-wp-sqlite-translator.php',
								start: 3314750,
								end: 3378600,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/wp-includes/sqlite/db.php',
								start: 3378600,
								end: 3380235,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/sqlite-database-integration/wp-includes/sqlite/install-functions.php',
								start: 3380235,
								end: 3384807,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/.wordpress-org/banner-772x250.png',
								start: 3384807,
								end: 3454865,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/.wordpress-org/icon-128x128.png',
								start: 3454865,
								end: 3462748,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/.wordpress-org/icon-256x256.png',
								start: 3462748,
								end: 3480207,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/.wordpress-org/icon.svg',
								start: 3480207,
								end: 3486953,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/LICENSE',
								start: 3486953,
								end: 3505045,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/README.md',
								start: 3505045,
								end: 3505925,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/class-wp-import.php',
								start: 3505925,
								end: 3557603,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/class-wp-import.php.orig',
								start: 3557603,
								end: 3609032,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/compat.php',
								start: 3609032,
								end: 3609896,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/parsers.php',
								start: 3609896,
								end: 3610477,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/parsers/class-wxr-parser-regex.php',
								start: 3610477,
								end: 3621779,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/parsers/class-wxr-parser-simplexml.php',
								start: 3621779,
								end: 3629958,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/parsers/class-wxr-parser-xml.php',
								start: 3629958,
								end: 3636845,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/parsers/class-wxr-parser.php',
								start: 3636845,
								end: 3638749,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/parsers/class-wxz-parser.php',
								start: 3638749,
								end: 3642585,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/readme.txt',
								start: 3642585,
								end: 3648513,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/src/wordpress-importer.php',
								start: 3648513,
								end: 3650816,
							},
							{
								filename:
									'/wordpress/wp-content/plugins/wordpress-importer/wordpress-importer.php',
								start: 3650816,
								end: 3651077,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/parts/comments.html',
								start: 3651077,
								end: 3651143,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/parts/footer.html',
								start: 3651143,
								end: 3651208,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/parts/header.html',
								start: 3651208,
								end: 3651744,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/parts/post-meta.html',
								start: 3651744,
								end: 3651804,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/patterns/call-to-action.php',
								start: 3651804,
								end: 3652952,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/patterns/footer-default.php',
								start: 3652952,
								end: 3653686,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/patterns/hidden-404.php',
								start: 3653686,
								end: 3655018,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/patterns/hidden-comments.php',
								start: 3655018,
								end: 3657066,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/patterns/hidden-no-results.php',
								start: 3657066,
								end: 3657665,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/patterns/post-meta.php',
								start: 3657665,
								end: 3660176,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/style.css',
								start: 3660176,
								end: 3661290,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/styles/aubergine.json',
								start: 3661290,
								end: 3667322,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/styles/block-out.json',
								start: 3667322,
								end: 3671687,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/styles/canary.json',
								start: 3671687,
								end: 3676279,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/styles/electric.json',
								start: 3676279,
								end: 3678151,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/styles/grapes.json',
								start: 3678151,
								end: 3679902,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/styles/marigold.json',
								start: 3679902,
								end: 3686036,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/styles/pilgrimage.json',
								start: 3686036,
								end: 3692565,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/styles/pitch.json',
								start: 3692565,
								end: 3697322,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/styles/sherbet.json',
								start: 3697322,
								end: 3702607,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/styles/whisper.json',
								start: 3702607,
								end: 3713912,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/templates/404.html',
								start: 3713912,
								end: 3714230,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/templates/archive.html',
								start: 3714230,
								end: 3715903,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/templates/blank.html',
								start: 3715903,
								end: 3715963,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/templates/blog-alternative.html',
								start: 3715963,
								end: 3717465,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/templates/home.html',
								start: 3717465,
								end: 3719528,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/templates/index.html',
								start: 3719528,
								end: 3720894,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/templates/page.html',
								start: 3720894,
								end: 3721784,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/templates/search.html',
								start: 3721784,
								end: 3723599,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/templates/single.html',
								start: 3723599,
								end: 3724538,
							},
							{
								filename:
									'/wordpress/wp-content/themes/twentytwentythree/theme.json',
								start: 3724538,
								end: 3739579,
							},
							{
								filename: '/wordpress/wp-cron.php',
								start: 3739579,
								end: 3742327,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/getid3.lib.php',
								start: 3742327,
								end: 3779206,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/getid3.php',
								start: 3779206,
								end: 3826467,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.audio-video.asf.php',
								start: 3826467,
								end: 3911804,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.audio-video.flv.php',
								start: 3911804,
								end: 3928519,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.audio-video.matroska.php',
								start: 3928519,
								end: 3987470,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.audio-video.quicktime.php',
								start: 3987470,
								end: 4099701,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.audio-video.riff.php',
								start: 4099701,
								end: 4188050,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.audio.ac3.php',
								start: 4188050,
								end: 4213986,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.audio.dts.php',
								start: 4213986,
								end: 4221436,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.audio.flac.php',
								start: 4221436,
								end: 4235498,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.audio.mp3.php',
								start: 4235498,
								end: 4310209,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.audio.ogg.php',
								start: 4310209,
								end: 4344320,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.tag.apetag.php',
								start: 4344320,
								end: 4359044,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.tag.id3v1.php',
								start: 4359044,
								end: 4369183,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.tag.id3v2.php',
								start: 4369183,
								end: 4459288,
							},
							{
								filename:
									'/wordpress/wp-includes/ID3/module.tag.lyrics3.php',
								start: 4459288,
								end: 4468071,
							},
							{
								filename:
									'/wordpress/wp-includes/IXR/class-IXR-base64.php',
								start: 4468071,
								end: 4468313,
							},
							{
								filename:
									'/wordpress/wp-includes/IXR/class-IXR-client.php',
								start: 4468313,
								end: 4471241,
							},
							{
								filename:
									'/wordpress/wp-includes/IXR/class-IXR-clientmulticall.php',
								start: 4471241,
								end: 4471867,
							},
							{
								filename:
									'/wordpress/wp-includes/IXR/class-IXR-date.php',
								start: 4471867,
								end: 4473090,
							},
							{
								filename:
									'/wordpress/wp-includes/IXR/class-IXR-error.php',
								start: 4473090,
								end: 4473753,
							},
							{
								filename:
									'/wordpress/wp-includes/IXR/class-IXR-introspectionserver.php',
								start: 4473753,
								end: 4476871,
							},
							{
								filename:
									'/wordpress/wp-includes/IXR/class-IXR-message.php',
								start: 4476871,
								end: 4481467,
							},
							{
								filename:
									'/wordpress/wp-includes/IXR/class-IXR-request.php',
								start: 4481467,
								end: 4482104,
							},
							{
								filename:
									'/wordpress/wp-includes/IXR/class-IXR-server.php',
								start: 4482104,
								end: 4486404,
							},
							{
								filename:
									'/wordpress/wp-includes/IXR/class-IXR-value.php',
								start: 4486404,
								end: 4488549,
							},
							{
								filename:
									'/wordpress/wp-includes/PHPMailer/Exception.php',
								start: 4488549,
								end: 4488768,
							},
							{
								filename:
									'/wordpress/wp-includes/PHPMailer/PHPMailer.php',
								start: 4488768,
								end: 4564602,
							},
							{
								filename:
									'/wordpress/wp-includes/PHPMailer/SMTP.php',
								start: 4564602,
								end: 4581728,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/library/Requests.php',
								start: 4581728,
								end: 4581789,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Auth.php',
								start: 4581789,
								end: 4581907,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Auth/Basic.php',
								start: 4581907,
								end: 4583048,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Autoload.php',
								start: 4583048,
								end: 4588417,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Capability.php',
								start: 4588417,
								end: 4588522,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Cookie.php',
								start: 4588522,
								end: 4595316,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Cookie/Jar.php',
								start: 4595316,
								end: 4597520,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception.php',
								start: 4597520,
								end: 4597913,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/ArgumentCount.php',
								start: 4597913,
								end: 4598290,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http.php',
								start: 4598290,
								end: 4599019,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status304.php',
								start: 4599019,
								end: 4599200,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status305.php',
								start: 4599200,
								end: 4599378,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status306.php',
								start: 4599378,
								end: 4599559,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status400.php',
								start: 4599559,
								end: 4599739,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status401.php',
								start: 4599739,
								end: 4599920,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status402.php',
								start: 4599920,
								end: 4600105,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status403.php',
								start: 4600105,
								end: 4600283,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status404.php',
								start: 4600283,
								end: 4600461,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status405.php',
								start: 4600461,
								end: 4600648,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status406.php',
								start: 4600648,
								end: 4600831,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status407.php',
								start: 4600831,
								end: 4601029,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status408.php',
								start: 4601029,
								end: 4601213,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status409.php',
								start: 4601213,
								end: 4601390,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status410.php',
								start: 4601390,
								end: 4601563,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status411.php',
								start: 4601563,
								end: 4601747,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status412.php',
								start: 4601747,
								end: 4601935,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status413.php',
								start: 4601935,
								end: 4602128,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status414.php',
								start: 4602128,
								end: 4602318,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status415.php',
								start: 4602318,
								end: 4602509,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status416.php',
								start: 4602509,
								end: 4602709,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status417.php',
								start: 4602709,
								end: 4602896,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status418.php',
								start: 4602896,
								end: 4603077,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status428.php',
								start: 4603077,
								end: 4603267,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status429.php',
								start: 4603267,
								end: 4603453,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status431.php',
								start: 4603453,
								end: 4603653,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status500.php',
								start: 4603653,
								end: 4603843,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status501.php',
								start: 4603843,
								end: 4604027,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status502.php',
								start: 4604027,
								end: 4604207,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status503.php',
								start: 4604207,
								end: 4604395,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status504.php',
								start: 4604395,
								end: 4604579,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status505.php',
								start: 4604579,
								end: 4604774,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/Status511.php',
								start: 4604774,
								end: 4604974,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Http/StatusUnknown.php',
								start: 4604974,
								end: 4605355,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/InvalidArgument.php',
								start: 4605355,
								end: 4605798,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Transport.php',
								start: 4605798,
								end: 4605908,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Exception/Transport/Curl.php',
								start: 4605908,
								end: 4606599,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/HookManager.php',
								start: 4606599,
								end: 4606768,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Hooks.php',
								start: 4606768,
								end: 4608194,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/IdnaEncoder.php',
								start: 4608194,
								end: 4613684,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Ipv6.php',
								start: 4613684,
								end: 4616234,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Iri.php',
								start: 4616234,
								end: 4632274,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Port.php',
								start: 4632274,
								end: 4632818,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Proxy.php',
								start: 4632818,
								end: 4632937,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Proxy/Http.php',
								start: 4632937,
								end: 4634857,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Requests.php',
								start: 4634857,
								end: 4650473,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Response.php',
								start: 4650473,
								end: 4651792,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Response/Headers.php',
								start: 4651792,
								end: 4653168,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Session.php',
								start: 4653168,
								end: 4657010,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Ssl.php',
								start: 4657010,
								end: 4659223,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Transport.php',
								start: 4659223,
								end: 4659457,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Transport/Curl.php',
								start: 4659457,
								end: 4671006,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Transport/Fsockopen.php',
								start: 4671006,
								end: 4680666,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Utility/CaseInsensitiveDictionary.php',
								start: 4680666,
								end: 4681850,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Utility/FilteredIterator.php',
								start: 4681850,
								end: 4682657,
							},
							{
								filename:
									'/wordpress/wp-includes/Requests/src/Utility/InputValidator.php',
								start: 4682657,
								end: 4683625,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Author.php',
								start: 4683625,
								end: 4684181,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Cache.php',
								start: 4684181,
								end: 4685307,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Cache/Base.php',
								start: 4685307,
								end: 4685583,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Cache/DB.php',
								start: 4685583,
								end: 4687649,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Cache/File.php',
								start: 4687649,
								end: 4688687,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Cache/Memcache.php',
								start: 4688687,
								end: 4690055,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Cache/Memcached.php',
								start: 4690055,
								end: 4691458,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Cache/MySQL.php',
								start: 4691458,
								end: 4699815,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Cache/Redis.php',
								start: 4699815,
								end: 4701466,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Caption.php',
								start: 4701466,
								end: 4702356,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Category.php',
								start: 4702356,
								end: 4702985,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Content/Type/Sniffer.php',
								start: 4702985,
								end: 4707429,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Copyright.php',
								start: 4707429,
								end: 4707847,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Core.php',
								start: 4707847,
								end: 4707896,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Credit.php',
								start: 4707896,
								end: 4708459,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Decode/HTML/Entities.php',
								start: 4708459,
								end: 4720379,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Enclosure.php',
								start: 4720379,
								end: 4733975,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Exception.php',
								start: 4733975,
								end: 4734029,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/File.php',
								start: 4734029,
								end: 4740430,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/HTTP/Parser.php',
								start: 4740430,
								end: 4746773,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/IRI.php',
								start: 4746773,
								end: 4762904,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Item.php',
								start: 4762904,
								end: 4835901,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Locator.php',
								start: 4835901,
								end: 4845656,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Misc.php',
								start: 4845656,
								end: 4886973,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Net/IPv6.php',
								start: 4886973,
								end: 4889339,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Parse/Date.php',
								start: 4889339,
								end: 4902473,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Parser.php',
								start: 4902473,
								end: 4924867,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Rating.php',
								start: 4924867,
								end: 4925297,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Registry.php',
								start: 4925297,
								end: 4927552,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Restriction.php',
								start: 4927552,
								end: 4928169,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Sanitize.php',
								start: 4928169,
								end: 4940314,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/Source.php',
								start: 4940314,
								end: 4956915,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/XML/Declaration/Parser.php',
								start: 4956915,
								end: 4960343,
							},
							{
								filename:
									'/wordpress/wp-includes/SimplePie/gzdecode.php',
								start: 4960343,
								end: 4963411,
							},
							{
								filename:
									'/wordpress/wp-includes/Text/Diff.php',
								start: 4963411,
								end: 4968959,
							},
							{
								filename:
									'/wordpress/wp-includes/Text/Diff/Engine/native.php',
								start: 4968959,
								end: 4975662,
							},
							{
								filename:
									'/wordpress/wp-includes/Text/Diff/Engine/shell.php',
								start: 4975662,
								end: 4977953,
							},
							{
								filename:
									'/wordpress/wp-includes/Text/Diff/Engine/string.php',
								start: 4977953,
								end: 4981952,
							},
							{
								filename:
									'/wordpress/wp-includes/Text/Diff/Engine/xdiff.php',
								start: 4981952,
								end: 4982684,
							},
							{
								filename:
									'/wordpress/wp-includes/Text/Diff/Renderer.php',
								start: 4982684,
								end: 4985756,
							},
							{
								filename:
									'/wordpress/wp-includes/Text/Diff/Renderer/inline.php',
								start: 4985756,
								end: 4988470,
							},
							{
								filename:
									'/wordpress/wp-includes/admin-bar.php',
								start: 4988470,
								end: 5012214,
							},
							{
								filename:
									'/wordpress/wp-includes/assets/script-loader-packages.min.php',
								start: 5012214,
								end: 5024409,
							},
							{
								filename:
									'/wordpress/wp-includes/assets/script-loader-packages.php',
								start: 5024409,
								end: 5036372,
							},
							{
								filename:
									'/wordpress/wp-includes/assets/script-loader-react-refresh-entry.min.php',
								start: 5036372,
								end: 5036482,
							},
							{
								filename:
									'/wordpress/wp-includes/assets/script-loader-react-refresh-entry.php',
								start: 5036482,
								end: 5036592,
							},
							{
								filename:
									'/wordpress/wp-includes/assets/script-loader-react-refresh-runtime.min.php',
								start: 5036592,
								end: 5036676,
							},
							{
								filename:
									'/wordpress/wp-includes/assets/script-loader-react-refresh-runtime.php',
								start: 5036676,
								end: 5036760,
							},
							{
								filename: '/wordpress/wp-includes/atomlib.php',
								start: 5036760,
								end: 5044301,
							},
							{
								filename:
									'/wordpress/wp-includes/author-template.php',
								start: 5044301,
								end: 5051516,
							},
							{
								filename:
									'/wordpress/wp-includes/block-editor.php',
								start: 5051516,
								end: 5068776,
							},
							{
								filename:
									'/wordpress/wp-includes/block-i18n.json',
								start: 5068776,
								end: 5069092,
							},
							{
								filename:
									'/wordpress/wp-includes/block-patterns.php',
								start: 5069092,
								end: 5079442,
							},
							{
								filename:
									'/wordpress/wp-includes/block-patterns/query-grid-posts.php',
								start: 5079442,
								end: 5080353,
							},
							{
								filename:
									'/wordpress/wp-includes/block-patterns/query-large-title-posts.php',
								start: 5080353,
								end: 5082272,
							},
							{
								filename:
									'/wordpress/wp-includes/block-patterns/query-medium-posts.php',
								start: 5082272,
								end: 5083255,
							},
							{
								filename:
									'/wordpress/wp-includes/block-patterns/query-offset-posts.php',
								start: 5083255,
								end: 5085196,
							},
							{
								filename:
									'/wordpress/wp-includes/block-patterns/query-small-posts.php',
								start: 5085196,
								end: 5086294,
							},
							{
								filename:
									'/wordpress/wp-includes/block-patterns/query-standard-posts.php',
								start: 5086294,
								end: 5087037,
							},
							{
								filename:
									'/wordpress/wp-includes/block-patterns/social-links-shared-background-color.php',
								start: 5087037,
								end: 5087774,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/align.php',
								start: 5087774,
								end: 5088785,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/border.php',
								start: 5088785,
								end: 5092826,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/colors.php',
								start: 5092826,
								end: 5096982,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/custom-classname.php',
								start: 5096982,
								end: 5098026,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/dimensions.php',
								start: 5098026,
								end: 5099532,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/duotone.php',
								start: 5099532,
								end: 5100232,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/elements.php',
								start: 5100232,
								end: 5102407,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/generated-classname.php',
								start: 5102407,
								end: 5103192,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/layout.php',
								start: 5103192,
								end: 5124054,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/position.php',
								start: 5124054,
								end: 5126924,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/settings.php',
								start: 5126924,
								end: 5129546,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/shadow.php',
								start: 5129546,
								end: 5130955,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/spacing.php',
								start: 5130955,
								end: 5132717,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/typography.php',
								start: 5132717,
								end: 5148695,
							},
							{
								filename:
									'/wordpress/wp-includes/block-supports/utils.php',
								start: 5148695,
								end: 5149144,
							},
							{
								filename:
									'/wordpress/wp-includes/block-template-utils.php',
								start: 5149144,
								end: 5178276,
							},
							{
								filename:
									'/wordpress/wp-includes/block-template.php',
								start: 5178276,
								end: 5183183,
							},
							{
								filename: '/wordpress/wp-includes/blocks.php',
								start: 5183183,
								end: 5211956,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/archives.php',
								start: 5211956,
								end: 5214173,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/archives/block.json',
								start: 5214173,
								end: 5215292,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/archives/editor.min.css',
								start: 5215292,
								end: 5215332,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/archives/style.min.css',
								start: 5215332,
								end: 5215421,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/audio/block.json',
								start: 5215421,
								end: 5216671,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/audio/editor.min.css',
								start: 5216671,
								end: 5216884,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/audio/style.min.css',
								start: 5216884,
								end: 5217032,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/audio/theme.min.css',
								start: 5217032,
								end: 5217202,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/avatar.php',
								start: 5217202,
								end: 5221247,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/avatar/block.json',
								start: 5221247,
								end: 5222262,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/avatar/editor.min.css',
								start: 5222262,
								end: 5222381,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/avatar/style.min.css',
								start: 5222381,
								end: 5222519,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/block.php',
								start: 5222519,
								end: 5223530,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/block/block.json',
								start: 5223530,
								end: 5224007,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/block/editor.min.css',
								start: 5224007,
								end: 5225128,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/blocks-json.php',
								start: 5225128,
								end: 5345877,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/button/block.json',
								start: 5345877,
								end: 5348492,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/button/editor.min.css',
								start: 5348492,
								end: 5350879,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/button/style.min.css',
								start: 5350879,
								end: 5353984,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/buttons/block.json',
								start: 5353984,
								end: 5355090,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/buttons/editor.min.css',
								start: 5355090,
								end: 5356199,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/buttons/style.min.css',
								start: 5356199,
								end: 5357502,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/calendar.php',
								start: 5357502,
								end: 5361424,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/calendar/block.json',
								start: 5361424,
								end: 5362398,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/calendar/style.min.css',
								start: 5362398,
								end: 5363059,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/categories.php',
								start: 5363059,
								end: 5365099,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/categories/block.json',
								start: 5365099,
								end: 5366336,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/categories/editor.min.css',
								start: 5366336,
								end: 5366480,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/categories/style.min.css',
								start: 5366480,
								end: 5366699,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/code/block.json',
								start: 5366699,
								end: 5368e3,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/code/editor.min.css',
								start: 5368e3,
								end: 5368036,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/code/style.min.css',
								start: 5368036,
								end: 5368173,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/code/theme.min.css',
								start: 5368173,
								end: 5368289,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/column/block.json',
								start: 5368289,
								end: 5369742,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/columns/block.json',
								start: 5369742,
								end: 5371571,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/columns/editor.min.css',
								start: 5371571,
								end: 5371710,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/columns/style.min.css',
								start: 5371710,
								end: 5373210,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-author-name.php',
								start: 5373210,
								end: 5374763,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-author-name/block.json',
								start: 5374763,
								end: 5375901,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-content.php',
								start: 5375901,
								end: 5377703,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-content/block.json',
								start: 5377703,
								end: 5378746,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-content/style.min.css',
								start: 5378746,
								end: 5378822,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-date.php',
								start: 5378822,
								end: 5379926,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-date/block.json',
								start: 5379926,
								end: 5380984,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-edit-link.php',
								start: 5380984,
								end: 5382165,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-edit-link/block.json',
								start: 5382165,
								end: 5383324,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-reply-link.php',
								start: 5383324,
								end: 5384708,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-reply-link/block.json',
								start: 5384708,
								end: 5385709,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-template.php',
								start: 5385709,
								end: 5388069,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-template/block.json',
								start: 5388069,
								end: 5388973,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comment-template/style.min.css',
								start: 5388973,
								end: 5389428,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination-next.php',
								start: 5389428,
								end: 5390660,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination-next/block.json',
								start: 5390660,
								end: 5391617,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination-numbers.php',
								start: 5391617,
								end: 5392572,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination-numbers/block.json',
								start: 5392572,
								end: 5393467,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination-numbers/editor.min.css',
								start: 5393467,
								end: 5393680,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination-previous.php',
								start: 5393680,
								end: 5394770,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination-previous/block.json',
								start: 5394770,
								end: 5395739,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination.php',
								start: 5395739,
								end: 5396441,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination/block.json',
								start: 5396441,
								end: 5397740,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination/editor.min.css',
								start: 5397740,
								end: 5398460,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-pagination/style.min.css',
								start: 5398460,
								end: 5399467,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-title.php',
								start: 5399467,
								end: 5401444,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-title/block.json',
								start: 5401444,
								end: 5402856,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments-title/editor.min.css',
								start: 5402856,
								end: 5402912,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments.php',
								start: 5402912,
								end: 5406443,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments/block.json',
								start: 5406443,
								end: 5407601,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments/editor.min.css',
								start: 5407601,
								end: 5411960,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/comments/style.min.css',
								start: 5411960,
								end: 5414286,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/cover.php',
								start: 5414286,
								end: 5416038,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/cover/block.json',
								start: 5416038,
								end: 5418672,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/cover/editor.min.css',
								start: 5418672,
								end: 5420416,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/cover/style.min.css',
								start: 5420416,
								end: 5437204,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/details/block.json',
								start: 5437204,
								end: 5438474,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/details/editor.min.css',
								start: 5438474,
								end: 5438519,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/details/style.min.css',
								start: 5438519,
								end: 5438760,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/embed/block.json',
								start: 5438760,
								end: 5439818,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/embed/editor.min.css',
								start: 5439818,
								end: 5440440,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/embed/style.min.css',
								start: 5440440,
								end: 5442028,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/embed/theme.min.css',
								start: 5442028,
								end: 5442198,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/file.php',
								start: 5442198,
								end: 5444385,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/file/block.json',
								start: 5444385,
								end: 5445833,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/file/editor.min.css',
								start: 5445833,
								end: 5446533,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/file/style.min.css',
								start: 5446533,
								end: 5447138,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/file/view.asset.php',
								start: 5447138,
								end: 5447222,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/file/view.min.asset.php',
								start: 5447222,
								end: 5447306,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/file/view.min.js',
								start: 5447306,
								end: 5447894,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/footnotes.php',
								start: 5447894,
								end: 5451912,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/footnotes/block.json',
								start: 5451912,
								end: 5452287,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/footnotes/style.min.css',
								start: 5452287,
								end: 5452574,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/freeform/block.json',
								start: 5452574,
								end: 5453010,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/freeform/editor.min.css',
								start: 5453010,
								end: 5462748,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/gallery.php',
								start: 5462748,
								end: 5465568,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/gallery/block.json',
								start: 5465568,
								end: 5468265,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/gallery/editor.min.css',
								start: 5468265,
								end: 5471583,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/gallery/style.min.css',
								start: 5471583,
								end: 5485688,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/gallery/theme.min.css',
								start: 5485688,
								end: 5485821,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/group/block.json',
								start: 5485821,
								end: 5487627,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/group/editor.min.css',
								start: 5487627,
								end: 5490207,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/group/style.min.css',
								start: 5490207,
								end: 5490245,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/group/theme.min.css',
								start: 5490245,
								end: 5490307,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/heading.php',
								start: 5490307,
								end: 5490897,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/heading/block.json',
								start: 5490897,
								end: 5492498,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/heading/style.min.css',
								start: 5492498,
								end: 5492629,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/home-link.php',
								start: 5492629,
								end: 5495706,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/home-link/block.json',
								start: 5495706,
								end: 5496782,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/html/block.json',
								start: 5496782,
								end: 5497254,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/html/editor.min.css',
								start: 5497254,
								end: 5498011,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/image.php',
								start: 5498011,
								end: 5498582,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/image/block.json',
								start: 5498582,
								end: 5501231,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/image/editor.min.css',
								start: 5501231,
								end: 5504011,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/image/style.min.css',
								start: 5504011,
								end: 5509785,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/image/theme.min.css',
								start: 5509785,
								end: 5509955,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/index.php',
								start: 5509955,
								end: 5512617,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/latest-comments.php',
								start: 5512617,
								end: 5515862,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/latest-comments/block.json',
								start: 5515862,
								end: 5517031,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/latest-comments/style.min.css',
								start: 5517031,
								end: 5518333,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/latest-posts.php',
								start: 5518333,
								end: 5524393,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/latest-posts/block.json',
								start: 5524393,
								end: 5526671,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/latest-posts/editor.min.css',
								start: 5526671,
								end: 5527100,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/latest-posts/style.min.css',
								start: 5527100,
								end: 5528760,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/legacy-widget.php',
								start: 5528760,
								end: 5531850,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/legacy-widget/block.json',
								start: 5531850,
								end: 5532351,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/list-item/block.json',
								start: 5532351,
								end: 5533227,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/list/block.json',
								start: 5533227,
								end: 5534887,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/list/style.min.css',
								start: 5534887,
								end: 5534974,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/loginout.php',
								start: 5534974,
								end: 5535871,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/loginout/block.json',
								start: 5535871,
								end: 5536699,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/media-text/block.json',
								start: 5536699,
								end: 5539305,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/media-text/editor.min.css',
								start: 5539305,
								end: 5539863,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/media-text/style.min.css',
								start: 5539863,
								end: 5542114,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/missing/block.json',
								start: 5542114,
								end: 5542678,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/more/block.json',
								start: 5542678,
								end: 5543242,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/more/editor.min.css',
								start: 5543242,
								end: 5543973,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation-link.php',
								start: 5543973,
								end: 5552423,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation-link/block.json',
								start: 5552423,
								end: 5554e3,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation-link/editor.min.css',
								start: 5554e3,
								end: 5556214,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation-link/style.min.css',
								start: 5556214,
								end: 5556384,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation-submenu.php',
								start: 5556384,
								end: 5562696,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation-submenu/block.json',
								start: 5562696,
								end: 5563882,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation-submenu/editor.min.css',
								start: 5563882,
								end: 5564986,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation.php',
								start: 5564986,
								end: 5590276,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation/block.json',
								start: 5590276,
								end: 5593442,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation/editor.min.css',
								start: 5593442,
								end: 5605276,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation/style.min.css',
								start: 5605276,
								end: 5621357,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation/view-modal.asset.php',
								start: 5621357,
								end: 5621441,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation/view-modal.min.asset.php',
								start: 5621441,
								end: 5621525,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation/view-modal.min.js',
								start: 5621525,
								end: 5629339,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation/view.asset.php',
								start: 5629339,
								end: 5629423,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation/view.min.asset.php',
								start: 5629423,
								end: 5629507,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/navigation/view.min.js',
								start: 5629507,
								end: 5630643,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/nextpage/block.json',
								start: 5630643,
								end: 5631098,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/nextpage/editor.min.css',
								start: 5631098,
								end: 5631690,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/page-list-item.php',
								start: 5631690,
								end: 5631873,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/page-list-item/block.json',
								start: 5631873,
								end: 5632928,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/page-list.php',
								start: 5632928,
								end: 5642991,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/page-list/block.json',
								start: 5642991,
								end: 5644203,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/page-list/editor.min.css',
								start: 5644203,
								end: 5645423,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/page-list/style.min.css',
								start: 5645423,
								end: 5645785,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/paragraph/block.json',
								start: 5645785,
								end: 5647278,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/paragraph/editor.min.css',
								start: 5647278,
								end: 5647644,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/paragraph/style.min.css',
								start: 5647644,
								end: 5648156,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/pattern.php',
								start: 5648156,
								end: 5648714,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/pattern/block.json',
								start: 5648714,
								end: 5649050,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-author-biography.php',
								start: 5649050,
								end: 5649990,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-author-biography/block.json',
								start: 5649990,
								end: 5650912,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-author-name.php',
								start: 5650912,
								end: 5652164,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-author-name/block.json',
								start: 5652164,
								end: 5653233,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-author.php',
								start: 5653233,
								end: 5655300,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-author/block.json',
								start: 5655300,
								end: 5656698,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-author/style.min.css',
								start: 5656698,
								end: 5657034,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-comments-form.php',
								start: 5657034,
								end: 5658611,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-comments-form/block.json',
								start: 5658611,
								end: 5659621,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-comments-form/editor.min.css',
								start: 5659621,
								end: 5659745,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-comments-form/style.min.css',
								start: 5659745,
								end: 5661688,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-content.php',
								start: 5661688,
								end: 5662798,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-content/block.json',
								start: 5662798,
								end: 5663629,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-date.php',
								start: 5663629,
								end: 5665266,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-date/block.json',
								start: 5665266,
								end: 5666381,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-date/style.min.css',
								start: 5666381,
								end: 5666423,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-excerpt.php',
								start: 5666423,
								end: 5668356,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-excerpt/block.json',
								start: 5668356,
								end: 5669559,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-excerpt/editor.min.css',
								start: 5669559,
								end: 5669639,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-excerpt/style.min.css',
								start: 5669639,
								end: 5669956,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-featured-image.php',
								start: 5669956,
								end: 5675984,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-featured-image/block.json',
								start: 5675984,
								end: 5677771,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-featured-image/editor.min.css',
								start: 5677771,
								end: 5681930,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-featured-image/style.min.css',
								start: 5681930,
								end: 5683688,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-navigation-link.php',
								start: 5683688,
								end: 5686469,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-navigation-link/block.json',
								start: 5686469,
								end: 5687604,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-navigation-link/style.min.css',
								start: 5687604,
								end: 5688069,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-template.php',
								start: 5688069,
								end: 5691089,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-template/block.json',
								start: 5691089,
								end: 5692397,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-template/editor.min.css',
								start: 5692397,
								end: 5692491,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-template/style.min.css',
								start: 5692491,
								end: 5693549,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-terms.php',
								start: 5693549,
								end: 5695956,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-terms/block.json',
								start: 5695956,
								end: 5697127,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-terms/style.min.css',
								start: 5697127,
								end: 5697244,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-title.php',
								start: 5697244,
								end: 5698511,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-title/block.json',
								start: 5698511,
								end: 5699871,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/post-title/style.min.css',
								start: 5699871,
								end: 5699980,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/preformatted/block.json',
								start: 5699980,
								end: 5701004,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/preformatted/style.min.css',
								start: 5701004,
								end: 5701109,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/pullquote/block.json',
								start: 5701109,
								end: 5702718,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/pullquote/editor.min.css',
								start: 5702718,
								end: 5702960,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/pullquote/style.min.css',
								start: 5702960,
								end: 5703914,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/pullquote/theme.min.css',
								start: 5703914,
								end: 5704181,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-no-results.php',
								start: 5704181,
								end: 5705398,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-no-results/block.json',
								start: 5705398,
								end: 5706243,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination-next.php',
								start: 5706243,
								end: 5708404,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination-next/block.json',
								start: 5708404,
								end: 5709356,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination-numbers.php',
								start: 5709356,
								end: 5711227,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination-numbers/block.json',
								start: 5711227,
								end: 5712167,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination-numbers/editor.min.css',
								start: 5712167,
								end: 5712371,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination-previous.php',
								start: 5712371,
								end: 5714100,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination-previous/block.json',
								start: 5714100,
								end: 5715064,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination.php',
								start: 5715064,
								end: 5715744,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination/block.json',
								start: 5715744,
								end: 5717141,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination/editor.min.css',
								start: 5717141,
								end: 5717816,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-pagination/style.min.css',
								start: 5717816,
								end: 5719033,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-title.php',
								start: 5719033,
								end: 5720522,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-title/block.json',
								start: 5720522,
								end: 5721729,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query-title/style.min.css',
								start: 5721729,
								end: 5721773,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query.php',
								start: 5721773,
								end: 5721929,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query/block.json',
								start: 5721929,
								end: 5722943,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/query/editor.min.css',
								start: 5722943,
								end: 5724328,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/quote/block.json',
								start: 5724328,
								end: 5725825,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/quote/style.min.css',
								start: 5725825,
								end: 5726489,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/quote/theme.min.css',
								start: 5726489,
								end: 5726957,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/read-more.php',
								start: 5726957,
								end: 5728097,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/read-more/block.json',
								start: 5728097,
								end: 5729307,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/read-more/style.min.css',
								start: 5729307,
								end: 5729566,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/require-dynamic-blocks.php',
								start: 5729566,
								end: 5733338,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/require-static-blocks.php',
								start: 5733338,
								end: 5733669,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/rss.php',
								start: 5733669,
								end: 5737009,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/rss/block.json',
								start: 5737009,
								end: 5737914,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/rss/editor.min.css',
								start: 5737914,
								end: 5738166,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/rss/style.min.css',
								start: 5738166,
								end: 5738865,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/search.php',
								start: 5738865,
								end: 5754918,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/search/block.json',
								start: 5754918,
								end: 5757037,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/search/editor.min.css',
								start: 5757037,
								end: 5757317,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/search/style.min.css',
								start: 5757317,
								end: 5759416,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/search/theme.min.css',
								start: 5759416,
								end: 5759542,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/search/view.asset.php',
								start: 5759542,
								end: 5759626,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/search/view.min.asset.php',
								start: 5759626,
								end: 5759710,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/search/view.min.js',
								start: 5759710,
								end: 5760943,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/separator/block.json',
								start: 5760943,
								end: 5761947,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/separator/editor.min.css',
								start: 5761947,
								end: 5762175,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/separator/style.min.css',
								start: 5762175,
								end: 5762527,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/separator/theme.min.css',
								start: 5762527,
								end: 5762964,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/shortcode.php',
								start: 5762964,
								end: 5763288,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/shortcode/block.json',
								start: 5763288,
								end: 5763752,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/shortcode/editor.min.css',
								start: 5763752,
								end: 5764400,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-logo.php',
								start: 5764400,
								end: 5768268,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-logo/block.json',
								start: 5768268,
								end: 5769531,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-logo/editor.min.css',
								start: 5769531,
								end: 5772678,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-logo/style.min.css',
								start: 5772678,
								end: 5773103,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-tagline.php',
								start: 5773103,
								end: 5773759,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-tagline/block.json',
								start: 5773759,
								end: 5774987,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-tagline/editor.min.css',
								start: 5774987,
								end: 5775055,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-title.php',
								start: 5775055,
								end: 5776412,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-title/block.json',
								start: 5776412,
								end: 5777973,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-title/editor.min.css',
								start: 5777973,
								end: 5778099,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/site-title/style.min.css',
								start: 5778099,
								end: 5778136,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/social-link.php',
								start: 5778136,
								end: 5836163,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/social-link/block.json',
								start: 5836163,
								end: 5836875,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/social-link/editor.min.css',
								start: 5836875,
								end: 5837248,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/social-links/block.json',
								start: 5837248,
								end: 5839276,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/social-links/editor.min.css',
								start: 5839276,
								end: 5841263,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/social-links/style.min.css',
								start: 5841263,
								end: 5851192,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/spacer/block.json',
								start: 5851192,
								end: 5851815,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/spacer/editor.min.css',
								start: 5851815,
								end: 5852756,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/spacer/style.min.css',
								start: 5852756,
								end: 5852784,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/table/block.json',
								start: 5852784,
								end: 5857092,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/table/editor.min.css',
								start: 5857092,
								end: 5858852,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/table/style.min.css',
								start: 5858852,
								end: 5862727,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/table/theme.min.css',
								start: 5862727,
								end: 5862953,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/tag-cloud.php',
								start: 5862953,
								end: 5863942,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/tag-cloud/block.json',
								start: 5863942,
								end: 5865078,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/tag-cloud/style.min.css',
								start: 5865078,
								end: 5865618,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/template-part.php',
								start: 5865618,
								end: 5871567,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/template-part/block.json',
								start: 5871567,
								end: 5872164,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/template-part/editor.min.css',
								start: 5872164,
								end: 5873989,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/template-part/theme.min.css',
								start: 5873989,
								end: 5874080,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/term-description.php',
								start: 5874080,
								end: 5874971,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/term-description/block.json',
								start: 5874971,
								end: 5875936,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/term-description/style.min.css',
								start: 5875936,
								end: 5876110,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/text-columns/block.json',
								start: 5876110,
								end: 5876840,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/text-columns/editor.min.css',
								start: 5876840,
								end: 5876926,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/text-columns/style.min.css',
								start: 5876926,
								end: 5877378,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/verse/block.json',
								start: 5877378,
								end: 5878788,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/verse/style.min.css',
								start: 5878788,
								end: 5878889,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/video/block.json',
								start: 5878889,
								end: 5880790,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/video/editor.min.css',
								start: 5880790,
								end: 5882635,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/video/style.min.css',
								start: 5882635,
								end: 5882884,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/video/theme.min.css',
								start: 5882884,
								end: 5883054,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/widget-group.php',
								start: 5883054,
								end: 5884430,
							},
							{
								filename:
									'/wordpress/wp-includes/blocks/widget-group/block.json',
								start: 5884430,
								end: 5884749,
							},
							{
								filename:
									'/wordpress/wp-includes/bookmark-template.php',
								start: 5884749,
								end: 5890240,
							},
							{
								filename: '/wordpress/wp-includes/bookmark.php',
								start: 5890240,
								end: 5898640,
							},
							{
								filename:
									'/wordpress/wp-includes/cache-compat.php',
								start: 5898640,
								end: 5900512,
							},
							{
								filename: '/wordpress/wp-includes/cache.php',
								start: 5900512,
								end: 5903373,
							},
							{
								filename:
									'/wordpress/wp-includes/canonical.php',
								start: 5903373,
								end: 5926875,
							},
							{
								filename:
									'/wordpress/wp-includes/capabilities.php',
								start: 5926875,
								end: 5946891,
							},
							{
								filename:
									'/wordpress/wp-includes/category-template.php',
								start: 5946891,
								end: 5967688,
							},
							{
								filename: '/wordpress/wp-includes/category.php',
								start: 5967688,
								end: 5972162,
							},
							{
								filename:
									'/wordpress/wp-includes/certificates/ca-bundle.crt',
								start: 5972162,
								end: 6205393,
							},
							{
								filename:
									'/wordpress/wp-includes/class-IXR.php',
								start: 6205393,
								end: 6206019,
							},
							{
								filename:
									'/wordpress/wp-includes/class-feed.php',
								start: 6206019,
								end: 6206459,
							},
							{
								filename:
									'/wordpress/wp-includes/class-http.php',
								start: 6206459,
								end: 6206600,
							},
							{
								filename:
									'/wordpress/wp-includes/class-json.php',
								start: 6206600,
								end: 6220612,
							},
							{
								filename:
									'/wordpress/wp-includes/class-oembed.php',
								start: 6220612,
								end: 6220757,
							},
							{
								filename:
									'/wordpress/wp-includes/class-phpass.php',
								start: 6220757,
								end: 6224512,
							},
							{
								filename:
									'/wordpress/wp-includes/class-phpmailer.php',
								start: 6224512,
								end: 6225028,
							},
							{
								filename:
									'/wordpress/wp-includes/class-pop3.php',
								start: 6225028,
								end: 6235687,
							},
							{
								filename:
									'/wordpress/wp-includes/class-requests.php',
								start: 6235687,
								end: 6236556,
							},
							{
								filename:
									'/wordpress/wp-includes/class-simplepie.php',
								start: 6236556,
								end: 6292761,
							},
							{
								filename:
									'/wordpress/wp-includes/class-smtp.php',
								start: 6292761,
								end: 6293081,
							},
							{
								filename:
									'/wordpress/wp-includes/class-snoopy.php',
								start: 6293081,
								end: 6314520,
							},
							{
								filename:
									'/wordpress/wp-includes/class-walker-category-dropdown.php',
								start: 6314520,
								end: 6315476,
							},
							{
								filename:
									'/wordpress/wp-includes/class-walker-category.php',
								start: 6315476,
								end: 6319103,
							},
							{
								filename:
									'/wordpress/wp-includes/class-walker-comment.php',
								start: 6319103,
								end: 6326915,
							},
							{
								filename:
									'/wordpress/wp-includes/class-walker-nav-menu.php',
								start: 6326915,
								end: 6330798,
							},
							{
								filename:
									'/wordpress/wp-includes/class-walker-page-dropdown.php',
								start: 6330798,
								end: 6331671,
							},
							{
								filename:
									'/wordpress/wp-includes/class-walker-page.php',
								start: 6331671,
								end: 6335079,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-admin-bar.php',
								start: 6335079,
								end: 6345776,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-ajax-response.php',
								start: 6345776,
								end: 6348103,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-application-passwords.php',
								start: 6348103,
								end: 6353970,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-editor-context.php',
								start: 6353970,
								end: 6354274,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-list.php',
								start: 6354274,
								end: 6355628,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-parser-block.php',
								start: 6355628,
								end: 6356011,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-parser-frame.php',
								start: 6356011,
								end: 6356511,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-parser.php',
								start: 6356511,
								end: 6362044,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-pattern-categories-registry.php',
								start: 6362044,
								end: 6364101,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-patterns-registry.php',
								start: 6364101,
								end: 6366425,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-styles-registry.php',
								start: 6366425,
								end: 6368572,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-supports.php',
								start: 6368572,
								end: 6371852,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-template.php',
								start: 6371852,
								end: 6372201,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-type-registry.php',
								start: 6372201,
								end: 6374203,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block-type.php',
								start: 6374203,
								end: 6378127,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-block.php',
								start: 6378127,
								end: 6382144,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-classic-to-block-menu-converter.php',
								start: 6382144,
								end: 6384480,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-comment-query.php',
								start: 6384480,
								end: 6406392,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-comment.php',
								start: 6406392,
								end: 6409390,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-customize-control.php',
								start: 6409390,
								end: 6422499,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-customize-manager.php',
								start: 6422499,
								end: 6546931,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-customize-nav-menus.php',
								start: 6546931,
								end: 6585947,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-customize-panel.php',
								start: 6585947,
								end: 6589958,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-customize-section.php',
								start: 6589958,
								end: 6594290,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-customize-setting.php',
								start: 6594290,
								end: 6606874,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-customize-widgets.php',
								start: 6606874,
								end: 6648054,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-date-query.php',
								start: 6648054,
								end: 6663205,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-dependencies.php',
								start: 6663205,
								end: 6668604,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-dependency.php',
								start: 6668604,
								end: 6669307,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-duotone.php',
								start: 6669307,
								end: 6686641,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-editor.php',
								start: 6686641,
								end: 6729047,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-embed.php',
								start: 6729047,
								end: 6736631,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-error.php',
								start: 6736631,
								end: 6739430,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-fatal-error-handler.php',
								start: 6739430,
								end: 6742529,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-feed-cache-transient.php',
								start: 6742529,
								end: 6743454,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-feed-cache.php',
								start: 6743454,
								end: 6743839,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-hook.php',
								start: 6743839,
								end: 6749913,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-http-cookie.php',
								start: 6749913,
								end: 6752727,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-http-curl.php',
								start: 6752727,
								end: 6760394,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-http-encoding.php',
								start: 6760394,
								end: 6763012,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-http-ixr-client.php',
								start: 6763012,
								end: 6765418,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-http-proxy.php',
								start: 6765418,
								end: 6767351,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-http-requests-hooks.php',
								start: 6767351,
								end: 6767920,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-http-requests-response.php',
								start: 6767920,
								end: 6769993,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-http-response.php',
								start: 6769993,
								end: 6770873,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-http-streams.php',
								start: 6770873,
								end: 6781788,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-http.php',
								start: 6781788,
								end: 6798641,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-image-editor-gd.php',
								start: 6798641,
								end: 6807846,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-image-editor-imagick.php',
								start: 6807846,
								end: 6823240,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-image-editor.php',
								start: 6823240,
								end: 6829676,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-list-util.php',
								start: 6829676,
								end: 6832988,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-locale-switcher.php',
								start: 6832988,
								end: 6835493,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-locale.php',
								start: 6835493,
								end: 6841521,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-matchesmapregex.php',
								start: 6841521,
								end: 6842259,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-meta-query.php',
								start: 6842259,
								end: 6855504,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-metadata-lazyloader.php',
								start: 6855504,
								end: 6857897,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-navigation-fallback.php',
								start: 6857897,
								end: 6861549,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-network-query.php',
								start: 6861549,
								end: 6870542,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-network.php',
								start: 6870542,
								end: 6875457,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-object-cache.php',
								start: 6875457,
								end: 6882180,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-oembed-controller.php',
								start: 6882180,
								end: 6885892,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-oembed.php',
								start: 6885892,
								end: 6900137,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-paused-extensions-storage.php',
								start: 6900137,
								end: 6902667,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-post-type.php',
								start: 6902667,
								end: 6914481,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-post.php',
								start: 6914481,
								end: 6917465,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-query.php',
								start: 6917465,
								end: 6996986,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-recovery-mode-cookie-service.php',
								start: 6996986,
								end: 7000625,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-recovery-mode-email-service.php',
								start: 7000625,
								end: 7006290,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-recovery-mode-key-service.php',
								start: 7006290,
								end: 7008501,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-recovery-mode-link-service.php',
								start: 7008501,
								end: 7010076,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-recovery-mode.php',
								start: 7010076,
								end: 7016186,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-rewrite.php',
								start: 7016186,
								end: 7040910,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-role.php',
								start: 7040910,
								end: 7041568,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-roles.php',
								start: 7041568,
								end: 7045092,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-scripts.php',
								start: 7045092,
								end: 7058107,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-session-tokens.php',
								start: 7058107,
								end: 7060615,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-simplepie-file.php',
								start: 7060615,
								end: 7061928,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-simplepie-sanitize-kses.php',
								start: 7061928,
								end: 7062783,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-site-query.php',
								start: 7062783,
								end: 7076951,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-site.php',
								start: 7076951,
								end: 7079638,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-styles.php',
								start: 7079638,
								end: 7084787,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-tax-query.php',
								start: 7084787,
								end: 7094070,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-taxonomy.php',
								start: 7094070,
								end: 7103230,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-term-query.php',
								start: 7103230,
								end: 7121695,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-term.php',
								start: 7121695,
								end: 7123899,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-text-diff-renderer-inline.php',
								start: 7123899,
								end: 7124236,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-text-diff-renderer-table.php',
								start: 7124236,
								end: 7132262,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-textdomain-registry.php',
								start: 7132262,
								end: 7134631,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-theme-json-data.php',
								start: 7134631,
								end: 7135082,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-theme-json-resolver.php',
								start: 7135082,
								end: 7147545,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-theme-json-schema.php',
								start: 7147545,
								end: 7149374,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-theme-json.php',
								start: 7149374,
								end: 7220068,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-theme.php',
								start: 7220068,
								end: 7248153,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-user-meta-session-tokens.php',
								start: 7248153,
								end: 7249615,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-user-query.php',
								start: 7249615,
								end: 7269576,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-user-request.php',
								start: 7269576,
								end: 7270582,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-user.php',
								start: 7270582,
								end: 7279801,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-walker.php',
								start: 7279801,
								end: 7285421,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-widget-factory.php',
								start: 7285421,
								end: 7286820,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-widget.php',
								start: 7286820,
								end: 7294261,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wp-xmlrpc-server.php',
								start: 7294261,
								end: 7421276,
							},
							{
								filename: '/wordpress/wp-includes/class-wp.php',
								start: 7421276,
								end: 7435703,
							},
							{
								filename:
									'/wordpress/wp-includes/class-wpdb.php',
								start: 7435703,
								end: 7488975,
							},
							{
								filename:
									'/wordpress/wp-includes/class.wp-dependencies.php',
								start: 7488975,
								end: 7489132,
							},
							{
								filename:
									'/wordpress/wp-includes/class.wp-scripts.php',
								start: 7489132,
								end: 7489279,
							},
							{
								filename:
									'/wordpress/wp-includes/class.wp-styles.php',
								start: 7489279,
								end: 7489424,
							},
							{
								filename:
									'/wordpress/wp-includes/comment-template.php',
								start: 7489424,
								end: 7529247,
							},
							{
								filename: '/wordpress/wp-includes/comment.php',
								start: 7529247,
								end: 7589954,
							},
							{
								filename: '/wordpress/wp-includes/compat.php',
								start: 7589954,
								end: 7595528,
							},
							{
								filename: '/wordpress/wp-includes/cron.php',
								start: 7595528,
								end: 7608997,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-background-image-control.php',
								start: 7608997,
								end: 7609635,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-background-image-setting.php',
								start: 7609635,
								end: 7609847,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-background-position-control.php',
								start: 7609847,
								end: 7612098,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-code-editor-control.php',
								start: 7612098,
								end: 7613339,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-color-control.php',
								start: 7613339,
								end: 7615066,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-cropped-image-control.php',
								start: 7615066,
								end: 7615635,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-custom-css-setting.php',
								start: 7615635,
								end: 7617812,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-date-time-control.php',
								start: 7617812,
								end: 7624386,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-filter-setting.php',
								start: 7624386,
								end: 7624496,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-header-image-control.php',
								start: 7624496,
								end: 7631150,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-header-image-setting.php',
								start: 7631150,
								end: 7632083,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-image-control.php',
								start: 7632083,
								end: 7632547,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-media-control.php',
								start: 7632547,
								end: 7639267,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-nav-menu-auto-add-control.php',
								start: 7639267,
								end: 7639878,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-nav-menu-control.php',
								start: 7639878,
								end: 7641269,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-nav-menu-item-control.php',
								start: 7641269,
								end: 7646520,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-nav-menu-item-setting.php',
								start: 7646520,
								end: 7662916,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-nav-menu-location-control.php',
								start: 7662916,
								end: 7664461,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-nav-menu-locations-control.php',
								start: 7664461,
								end: 7666449,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-nav-menu-name-control.php',
								start: 7666449,
								end: 7667077,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-nav-menu-section.php',
								start: 7667077,
								end: 7667341,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-nav-menu-setting.php',
								start: 7667341,
								end: 7676931,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-nav-menus-panel.php',
								start: 7676931,
								end: 7678819,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-new-menu-control.php',
								start: 7678819,
								end: 7679403,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-new-menu-section.php',
								start: 7679403,
								end: 7680139,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-partial.php',
								start: 7680139,
								end: 7682825,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-selective-refresh.php',
								start: 7682825,
								end: 7688315,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-sidebar-section.php',
								start: 7688315,
								end: 7688653,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-site-icon-control.php',
								start: 7688653,
								end: 7690961,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-theme-control.php',
								start: 7690961,
								end: 7699777,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-themes-panel.php',
								start: 7699777,
								end: 7702007,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-themes-section.php',
								start: 7702007,
								end: 7706705,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-customize-upload-control.php',
								start: 7706705,
								end: 7707183,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-sidebar-block-editor-control.php',
								start: 7707183,
								end: 7707337,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-widget-area-customize-control.php',
								start: 7707337,
								end: 7708445,
							},
							{
								filename:
									'/wordpress/wp-includes/customize/class-wp-widget-form-customize-control.php',
								start: 7708445,
								end: 7709693,
							},
							{
								filename: '/wordpress/wp-includes/date.php',
								start: 7709693,
								end: 7709846,
							},
							{
								filename:
									'/wordpress/wp-includes/default-constants.php',
								start: 7709846,
								end: 7715760,
							},
							{
								filename:
									'/wordpress/wp-includes/default-filters.php',
								start: 7715760,
								end: 7744003,
							},
							{
								filename:
									'/wordpress/wp-includes/default-widgets.php',
								start: 7744003,
								end: 7745454,
							},
							{
								filename:
									'/wordpress/wp-includes/deprecated.php',
								start: 7745454,
								end: 7818038,
							},
							{
								filename:
									'/wordpress/wp-includes/embed-template.php',
								start: 7818038,
								end: 7818184,
							},
							{
								filename: '/wordpress/wp-includes/embed.php',
								start: 7818184,
								end: 7836748,
							},
							{
								filename:
									'/wordpress/wp-includes/error-protection.php',
								start: 7836748,
								end: 7838637,
							},
							{
								filename:
									'/wordpress/wp-includes/feed-atom-comments.php',
								start: 7838637,
								end: 7842563,
							},
							{
								filename:
									'/wordpress/wp-includes/feed-atom.php',
								start: 7842563,
								end: 7845081,
							},
							{
								filename: '/wordpress/wp-includes/feed-rdf.php',
								start: 7845081,
								end: 7847209,
							},
							{
								filename: '/wordpress/wp-includes/feed-rss.php',
								start: 7847209,
								end: 7848140,
							},
							{
								filename:
									'/wordpress/wp-includes/feed-rss2-comments.php',
								start: 7848140,
								end: 7850963,
							},
							{
								filename:
									'/wordpress/wp-includes/feed-rss2.php',
								start: 7850963,
								end: 7853688,
							},
							{
								filename: '/wordpress/wp-includes/feed.php',
								start: 7853688,
								end: 7863262,
							},
							{
								filename:
									'/wordpress/wp-includes/formatting.php',
								start: 7863262,
								end: 8074269,
							},
							{
								filename:
									'/wordpress/wp-includes/functions.php',
								start: 8074269,
								end: 8190520,
							},
							{
								filename:
									'/wordpress/wp-includes/functions.wp-scripts.php',
								start: 8190520,
								end: 8195480,
							},
							{
								filename:
									'/wordpress/wp-includes/functions.wp-styles.php',
								start: 8195480,
								end: 8197523,
							},
							{
								filename:
									'/wordpress/wp-includes/general-template.php',
								start: 8197523,
								end: 8272346,
							},
							{
								filename:
									'/wordpress/wp-includes/global-styles-and-settings.php',
								start: 8272346,
								end: 8280280,
							},
							{
								filename:
									'/wordpress/wp-includes/html-api/class-wp-html-attribute-token.php',
								start: 8280280,
								end: 8280687,
							},
							{
								filename:
									'/wordpress/wp-includes/html-api/class-wp-html-span.php',
								start: 8280687,
								end: 8280835,
							},
							{
								filename:
									'/wordpress/wp-includes/html-api/class-wp-html-tag-processor.php',
								start: 8280835,
								end: 8303692,
							},
							{
								filename:
									'/wordpress/wp-includes/html-api/class-wp-html-text-replacement.php',
								start: 8303692,
								end: 8303894,
							},
							{
								filename: '/wordpress/wp-includes/http.php',
								start: 8303894,
								end: 8312215,
							},
							{
								filename:
									'/wordpress/wp-includes/https-detection.php',
								start: 8312215,
								end: 8315084,
							},
							{
								filename:
									'/wordpress/wp-includes/https-migration.php',
								start: 8315084,
								end: 8316761,
							},
							{
								filename:
									'/wordpress/wp-includes/js/tinymce/wp-tinymce.php',
								start: 8316761,
								end: 8317506,
							},
							{
								filename:
									'/wordpress/wp-includes/js/wp-emoji-loader.min.js',
								start: 8317506,
								end: 8320495,
							},
							{
								filename: '/wordpress/wp-includes/kses.php',
								start: 8320495,
								end: 8354303,
							},
							{
								filename: '/wordpress/wp-includes/l10n.php',
								start: 8354303,
								end: 8377001,
							},
							{
								filename:
									'/wordpress/wp-includes/link-template.php',
								start: 8377001,
								end: 8438907,
							},
							{
								filename: '/wordpress/wp-includes/load.php',
								start: 8438907,
								end: 8463652,
							},
							{
								filename: '/wordpress/wp-includes/locale.php',
								start: 8463652,
								end: 8463710,
							},
							{
								filename:
									'/wordpress/wp-includes/media-template.php',
								start: 8463710,
								end: 8520317,
							},
							{
								filename: '/wordpress/wp-includes/media.php',
								start: 8520317,
								end: 8614205,
							},
							{
								filename: '/wordpress/wp-includes/meta.php',
								start: 8614205,
								end: 8636717,
							},
							{
								filename: '/wordpress/wp-includes/ms-blogs.php',
								start: 8636717,
								end: 8650171,
							},
							{
								filename:
									'/wordpress/wp-includes/ms-default-constants.php',
								start: 8650171,
								end: 8653183,
							},
							{
								filename:
									'/wordpress/wp-includes/ms-default-filters.php',
								start: 8653183,
								end: 8658878,
							},
							{
								filename:
									'/wordpress/wp-includes/ms-deprecated.php',
								start: 8658878,
								end: 8670290,
							},
							{
								filename: '/wordpress/wp-includes/ms-files.php',
								start: 8670290,
								end: 8672447,
							},
							{
								filename:
									'/wordpress/wp-includes/ms-functions.php',
								start: 8672447,
								end: 8714182,
							},
							{
								filename: '/wordpress/wp-includes/ms-load.php',
								start: 8714182,
								end: 8722945,
							},
							{
								filename:
									'/wordpress/wp-includes/ms-network.php',
								start: 8722945,
								end: 8724425,
							},
							{
								filename:
									'/wordpress/wp-includes/ms-settings.php',
								start: 8724425,
								end: 8726394,
							},
							{
								filename: '/wordpress/wp-includes/ms-site.php',
								start: 8726394,
								end: 8744407,
							},
							{
								filename:
									'/wordpress/wp-includes/nav-menu-template.php',
								start: 8744407,
								end: 8758557,
							},
							{
								filename: '/wordpress/wp-includes/nav-menu.php',
								start: 8758557,
								end: 8783489,
							},
							{
								filename:
									'/wordpress/wp-includes/navigation-fallback.php',
								start: 8783489,
								end: 8784627,
							},
							{
								filename: '/wordpress/wp-includes/option.php',
								start: 8784627,
								end: 8818818,
							},
							{
								filename:
									'/wordpress/wp-includes/php-compat/readonly.php',
								start: 8818818,
								end: 8819023,
							},
							{
								filename:
									'/wordpress/wp-includes/pluggable-deprecated.php',
								start: 8819023,
								end: 8821505,
							},
							{
								filename:
									'/wordpress/wp-includes/pluggable.php',
								start: 8821505,
								end: 8870032,
							},
							{
								filename: '/wordpress/wp-includes/plugin.php',
								start: 8870032,
								end: 8878926,
							},
							{
								filename:
									'/wordpress/wp-includes/pomo/entry.php',
								start: 8878926,
								end: 8880446,
							},
							{
								filename: '/wordpress/wp-includes/pomo/mo.php',
								start: 8880446,
								end: 8886689,
							},
							{
								filename:
									'/wordpress/wp-includes/pomo/plural-forms.php',
								start: 8886689,
								end: 8890917,
							},
							{
								filename: '/wordpress/wp-includes/pomo/po.php',
								start: 8890917,
								end: 8900696,
							},
							{
								filename:
									'/wordpress/wp-includes/pomo/streams.php',
								start: 8900696,
								end: 8905173,
							},
							{
								filename:
									'/wordpress/wp-includes/pomo/translations.php',
								start: 8905173,
								end: 8910917,
							},
							{
								filename:
									'/wordpress/wp-includes/post-formats.php',
								start: 8910917,
								end: 8914864,
							},
							{
								filename:
									'/wordpress/wp-includes/post-template.php',
								start: 8914864,
								end: 8945255,
							},
							{
								filename:
									'/wordpress/wp-includes/post-thumbnail-template.php',
								start: 8945255,
								end: 8947913,
							},
							{
								filename: '/wordpress/wp-includes/post.php',
								start: 8947913,
								end: 9066003,
							},
							{
								filename: '/wordpress/wp-includes/query.php',
								start: 9066003,
								end: 9079821,
							},
							{
								filename:
									'/wordpress/wp-includes/registration-functions.php',
								start: 9079821,
								end: 9079934,
							},
							{
								filename:
									'/wordpress/wp-includes/registration.php',
								start: 9079934,
								end: 9080047,
							},
							{
								filename: '/wordpress/wp-includes/rest-api.php',
								start: 9080047,
								end: 9135804,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/class-wp-rest-request.php',
								start: 9135804,
								end: 9146880,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/class-wp-rest-response.php',
								start: 9146880,
								end: 9149343,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/class-wp-rest-server.php',
								start: 9149343,
								end: 9174803,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-application-passwords-controller.php',
								start: 9174803,
								end: 9189873,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-attachments-controller.php',
								start: 9189873,
								end: 9218722,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-autosaves-controller.php',
								start: 9218722,
								end: 9226634,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-block-directory-controller.php',
								start: 9226634,
								end: 9232958,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-block-pattern-categories-controller.php',
								start: 9232958,
								end: 9235799,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-block-patterns-controller.php',
								start: 9235799,
								end: 9241477,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-block-renderer-controller.php',
								start: 9241477,
								end: 9245004,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-block-types-controller.php',
								start: 9245004,
								end: 9261635,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-blocks-controller.php',
								start: 9261635,
								end: 9262844,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-comments-controller.php',
								start: 9262844,
								end: 9301781,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-controller.php',
								start: 9301781,
								end: 9310774,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-edit-site-export-controller.php',
								start: 9310774,
								end: 9311981,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-global-styles-controller.php',
								start: 9311981,
								end: 9324913,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-global-styles-revisions-controller.php',
								start: 9324913,
								end: 9334576,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-menu-items-controller.php',
								start: 9334576,
								end: 9357567,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-menu-locations-controller.php',
								start: 9357567,
								end: 9362767,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-menus-controller.php',
								start: 9362767,
								end: 9373853,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-navigation-fallback-controller.php',
								start: 9373853,
								end: 9376912,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-pattern-directory-controller.php',
								start: 9376912,
								end: 9384429,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-plugins-controller.php',
								start: 9384429,
								end: 9403618,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-post-statuses-controller.php',
								start: 9403618,
								end: 9410181,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-post-types-controller.php',
								start: 9410181,
								end: 9419053,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-posts-controller.php',
								start: 9419053,
								end: 9483801,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-revisions-controller.php',
								start: 9483801,
								end: 9500145,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-search-controller.php',
								start: 9500145,
								end: 9507499,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-settings-controller.php',
								start: 9507499,
								end: 9512037,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-sidebars-controller.php',
								start: 9512037,
								end: 9521845,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-site-health-controller.php',
								start: 9521845,
								end: 9528179,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-taxonomies-controller.php',
								start: 9528179,
								end: 9537237,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-templates-controller.php',
								start: 9537237,
								end: 9558134,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-terms-controller.php',
								start: 9558134,
								end: 9579158,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-themes-controller.php',
								start: 9579158,
								end: 9592168,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-url-details-controller.php',
								start: 9592168,
								end: 9600425,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-users-controller.php',
								start: 9600425,
								end: 9631707,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-widget-types-controller.php',
								start: 9631707,
								end: 9643125,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/endpoints/class-wp-rest-widgets-controller.php',
								start: 9643125,
								end: 9659311,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/fields/class-wp-rest-comment-meta-fields.php',
								start: 9659311,
								end: 9659561,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/fields/class-wp-rest-meta-fields.php',
								start: 9659561,
								end: 9670010,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/fields/class-wp-rest-post-meta-fields.php',
								start: 9670010,
								end: 9670367,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/fields/class-wp-rest-term-meta-fields.php',
								start: 9670367,
								end: 9670759,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/fields/class-wp-rest-user-meta-fields.php',
								start: 9670759,
								end: 9670997,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/search/class-wp-rest-post-format-search-handler.php',
								start: 9670997,
								end: 9672937,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/search/class-wp-rest-post-search-handler.php',
								start: 9672937,
								end: 9675912,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/search/class-wp-rest-search-handler.php',
								start: 9675912,
								end: 9676360,
							},
							{
								filename:
									'/wordpress/wp-includes/rest-api/search/class-wp-rest-term-search-handler.php',
								start: 9676360,
								end: 9678749,
							},
							{
								filename: '/wordpress/wp-includes/revision.php',
								start: 9678749,
								end: 9690984,
							},
							{
								filename: '/wordpress/wp-includes/rewrite.php',
								start: 9690984,
								end: 9698998,
							},
							{
								filename:
									'/wordpress/wp-includes/robots-template.php',
								start: 9698998,
								end: 9700314,
							},
							{
								filename:
									'/wordpress/wp-includes/rss-functions.php',
								start: 9700314,
								end: 9700477,
							},
							{
								filename: '/wordpress/wp-includes/rss.php',
								start: 9700477,
								end: 9714920,
							},
							{
								filename:
									'/wordpress/wp-includes/script-loader.php',
								start: 9714920,
								end: 9806088,
							},
							{
								filename: '/wordpress/wp-includes/session.php',
								start: 9806088,
								end: 9806282,
							},
							{
								filename:
									'/wordpress/wp-includes/shortcodes.php',
								start: 9806282,
								end: 9814584,
							},
							{
								filename: '/wordpress/wp-includes/sitemaps.php',
								start: 9814584,
								end: 9815784,
							},
							{
								filename:
									'/wordpress/wp-includes/sitemaps/class-wp-sitemaps-index.php',
								start: 9815784,
								end: 9816561,
							},
							{
								filename:
									'/wordpress/wp-includes/sitemaps/class-wp-sitemaps-provider.php',
								start: 9816561,
								end: 9818223,
							},
							{
								filename:
									'/wordpress/wp-includes/sitemaps/class-wp-sitemaps-registry.php',
								start: 9818223,
								end: 9818843,
							},
							{
								filename:
									'/wordpress/wp-includes/sitemaps/class-wp-sitemaps-renderer.php',
								start: 9818843,
								end: 9822399,
							},
							{
								filename:
									'/wordpress/wp-includes/sitemaps/class-wp-sitemaps-stylesheet.php',
								start: 9822399,
								end: 9829344,
							},
							{
								filename:
									'/wordpress/wp-includes/sitemaps/class-wp-sitemaps.php',
								start: 9829344,
								end: 9832593,
							},
							{
								filename:
									'/wordpress/wp-includes/sitemaps/providers/class-wp-sitemaps-posts.php',
								start: 9832593,
								end: 9835084,
							},
							{
								filename:
									'/wordpress/wp-includes/sitemaps/providers/class-wp-sitemaps-taxonomies.php',
								start: 9835084,
								end: 9837301,
							},
							{
								filename:
									'/wordpress/wp-includes/sitemaps/providers/class-wp-sitemaps-users.php',
								start: 9837301,
								end: 9838790,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/LICENSE',
								start: 9838790,
								end: 9839650,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/autoload-php7.php',
								start: 9839650,
								end: 9840069,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/autoload.php',
								start: 9840069,
								end: 9841770,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/composer.json',
								start: 9841770,
								end: 9843378,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/lib/constants.php',
								start: 9843378,
								end: 9847536,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/lib/namespaced.php',
								start: 9847536,
								end: 9848087,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/lib/php72compat.php',
								start: 9848087,
								end: 9870524,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/lib/php72compat_const.php',
								start: 9870524,
								end: 9875120,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/lib/ristretto255.php',
								start: 9875120,
								end: 9879283,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/lib/sodium_compat.php',
								start: 9879283,
								end: 9890501,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/lib/stream-xchacha20.php',
								start: 9890501,
								end: 9891368,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Compat.php',
								start: 9891368,
								end: 9891452,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/BLAKE2b.php',
								start: 9891452,
								end: 9891548,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/ChaCha20.php',
								start: 9891548,
								end: 9891646,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/ChaCha20/Ctx.php',
								start: 9891646,
								end: 9891752,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/ChaCha20/IetfCtx.php',
								start: 9891752,
								end: 9891866,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Curve25519.php',
								start: 9891866,
								end: 9891968,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Curve25519/Fe.php',
								start: 9891968,
								end: 9892076,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Curve25519/Ge/Cached.php',
								start: 9892076,
								end: 9892198,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Curve25519/Ge/P1p1.php',
								start: 9892198,
								end: 9892316,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Curve25519/Ge/P2.php',
								start: 9892316,
								end: 9892430,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Curve25519/Ge/P3.php',
								start: 9892430,
								end: 9892544,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Curve25519/Ge/Precomp.php',
								start: 9892544,
								end: 9892668,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Curve25519/H.php',
								start: 9892668,
								end: 9892774,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Ed25519.php',
								start: 9892774,
								end: 9892870,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/HChaCha20.php',
								start: 9892870,
								end: 9892970,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/HSalsa20.php',
								start: 9892970,
								end: 9893068,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Poly1305.php',
								start: 9893068,
								end: 9893166,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Poly1305/State.php',
								start: 9893166,
								end: 9893276,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Salsa20.php',
								start: 9893276,
								end: 9893372,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/SipHash.php',
								start: 9893372,
								end: 9893468,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Util.php',
								start: 9893468,
								end: 9893558,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/X25519.php',
								start: 9893558,
								end: 9893652,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/XChaCha20.php',
								start: 9893652,
								end: 9893752,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Core/Xsalsa20.php',
								start: 9893752,
								end: 9893850,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/Crypto.php',
								start: 9893850,
								end: 9893934,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/namespaced/File.php',
								start: 9893934,
								end: 9894014,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Compat.php',
								start: 9894014,
								end: 9976465,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/BLAKE2b.php',
								start: 9976465,
								end: 9987436,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Base64/Common.php',
								start: 9987436,
								end: 9990396,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Base64/Original.php',
								start: 9990396,
								end: 9993831,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Base64/UrlSafe.php',
								start: 9993831,
								end: 9997266,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/ChaCha20.php',
								start: 9997266,
								end: 10002466,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/ChaCha20/Ctx.php',
								start: 10002466,
								end: 10004502,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/ChaCha20/IetfCtx.php',
								start: 10004502,
								end: 10005208,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Curve25519.php',
								start: 10005208,
								end: 10084425,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Curve25519/Fe.php',
								start: 10084425,
								end: 10085708,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Curve25519/Ge/Cached.php',
								start: 10085708,
								end: 10086531,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Curve25519/Ge/P1p1.php',
								start: 10086531,
								end: 10087272,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Curve25519/Ge/P2.php',
								start: 10087272,
								end: 10087867,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Curve25519/Ge/P3.php',
								start: 10087867,
								end: 10088604,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Curve25519/Ge/Precomp.php',
								start: 10088604,
								end: 10089293,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Curve25519/H.php',
								start: 10089293,
								end: 10178333,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Ed25519.php',
								start: 10178333,
								end: 10187115,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/HChaCha20.php',
								start: 10187115,
								end: 10189681,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/HSalsa20.php',
								start: 10189681,
								end: 10192145,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Poly1305.php',
								start: 10192145,
								end: 10192920,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Poly1305/State.php',
								start: 10192920,
								end: 10199766,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Ristretto255.php',
								start: 10199766,
								end: 10212294,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Salsa20.php',
								start: 10212294,
								end: 10217168,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/SecretStream/State.php',
								start: 10217168,
								end: 10219273,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/SipHash.php',
								start: 10219273,
								end: 10222584,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/Util.php',
								start: 10222584,
								end: 10234960,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/X25519.php',
								start: 10234960,
								end: 10239675,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/XChaCha20.php',
								start: 10239675,
								end: 10241272,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core/XSalsa20.php',
								start: 10241272,
								end: 10241754,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/BLAKE2b.php',
								start: 10241754,
								end: 10251135,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/ChaCha20.php',
								start: 10251135,
								end: 10256639,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/ChaCha20/Ctx.php',
								start: 10256639,
								end: 10259404,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/ChaCha20/IetfCtx.php',
								start: 10259404,
								end: 10260258,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Curve25519.php',
								start: 10260258,
								end: 10343360,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Curve25519/Fe.php',
								start: 10343360,
								end: 10346050,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Curve25519/Ge/Cached.php',
								start: 10346050,
								end: 10346893,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Curve25519/Ge/P1p1.php',
								start: 10346893,
								end: 10347650,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Curve25519/Ge/P2.php',
								start: 10347650,
								end: 10348261,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Curve25519/Ge/P3.php',
								start: 10348261,
								end: 10349018,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Curve25519/Ge/Precomp.php',
								start: 10349018,
								end: 10349720,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Curve25519/H.php',
								start: 10349720,
								end: 10438071,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Ed25519.php',
								start: 10438071,
								end: 10445842,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/HChaCha20.php',
								start: 10445842,
								end: 10448918,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/HSalsa20.php',
								start: 10448918,
								end: 10452926,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Int32.php',
								start: 10452926,
								end: 10466367,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Int64.php',
								start: 10466367,
								end: 10483957,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Poly1305.php',
								start: 10483957,
								end: 10484742,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Poly1305/State.php',
								start: 10484742,
								end: 10493356,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Salsa20.php',
								start: 10493356,
								end: 10499949,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/SecretStream/State.php',
								start: 10499949,
								end: 10502082,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/SipHash.php',
								start: 10502082,
								end: 10504851,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/Util.php',
								start: 10504851,
								end: 10505010,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/X25519.php',
								start: 10505010,
								end: 10511008,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/XChaCha20.php',
								start: 10511008,
								end: 10512149,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Core32/XSalsa20.php',
								start: 10512149,
								end: 10512637,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Crypto.php',
								start: 10512637,
								end: 10537184,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/Crypto32.php',
								start: 10537184,
								end: 10562040,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/File.php',
								start: 10562040,
								end: 10591448,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/PHP52/SplFixedArray.php',
								start: 10591448,
								end: 10593104,
							},
							{
								filename:
									'/wordpress/wp-includes/sodium_compat/src/SodiumException.php',
								start: 10593104,
								end: 10593204,
							},
							{
								filename:
									'/wordpress/wp-includes/spl-autoload-compat.php',
								start: 10593204,
								end: 10593314,
							},
							{
								filename:
									'/wordpress/wp-includes/style-engine.php',
								start: 10593314,
								end: 10595206,
							},
							{
								filename:
									'/wordpress/wp-includes/style-engine/class-wp-style-engine-css-declarations.php',
								start: 10595206,
								end: 10597169,
							},
							{
								filename:
									'/wordpress/wp-includes/style-engine/class-wp-style-engine-css-rule.php',
								start: 10597169,
								end: 10598769,
							},
							{
								filename:
									'/wordpress/wp-includes/style-engine/class-wp-style-engine-css-rules-store.php',
								start: 10598769,
								end: 10599882,
							},
							{
								filename:
									'/wordpress/wp-includes/style-engine/class-wp-style-engine-processor.php',
								start: 10599882,
								end: 10601950,
							},
							{
								filename:
									'/wordpress/wp-includes/style-engine/class-wp-style-engine.php',
								start: 10601950,
								end: 10612853,
							},
							{
								filename: '/wordpress/wp-includes/taxonomy.php',
								start: 10612853,
								end: 10682795,
							},
							{
								filename:
									'/wordpress/wp-includes/template-canvas.php',
								start: 10682795,
								end: 10683121,
							},
							{
								filename:
									'/wordpress/wp-includes/template-loader.php',
								start: 10683121,
								end: 10684846,
							},
							{
								filename: '/wordpress/wp-includes/template.php',
								start: 10684846,
								end: 10691824,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-compat/comments.php',
								start: 10691824,
								end: 10693455,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-compat/embed-404.php',
								start: 10693455,
								end: 10693972,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-compat/embed-content.php',
								start: 10693972,
								end: 10695962,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-compat/embed.php',
								start: 10695962,
								end: 10696176,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-compat/footer-embed.php',
								start: 10696176,
								end: 10696231,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-compat/footer.php',
								start: 10696231,
								end: 10696907,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-compat/header-embed.php',
								start: 10696907,
								end: 10697237,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-compat/header.php',
								start: 10697237,
								end: 10698797,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-compat/sidebar.php',
								start: 10698797,
								end: 10701922,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-i18n.json',
								start: 10701922,
								end: 10703073,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-previews.php',
								start: 10703073,
								end: 10704532,
							},
							{
								filename:
									'/wordpress/wp-includes/theme-templates.php',
								start: 10704532,
								end: 10708199,
							},
							{
								filename: '/wordpress/wp-includes/theme.json',
								start: 10708199,
								end: 10715402,
							},
							{
								filename: '/wordpress/wp-includes/theme.php',
								start: 10715402,
								end: 10785897,
							},
							{
								filename: '/wordpress/wp-includes/update.php',
								start: 10785897,
								end: 10807954,
							},
							{
								filename: '/wordpress/wp-includes/user.php',
								start: 10807954,
								end: 10881916,
							},
							{
								filename: '/wordpress/wp-includes/vars.php',
								start: 10881916,
								end: 10885873,
							},
							{
								filename: '/wordpress/wp-includes/version.php',
								start: 10885873,
								end: 10886028,
							},
							{
								filename: '/wordpress/wp-includes/widgets.php',
								start: 10886028,
								end: 10919106,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-nav-menu-widget.php',
								start: 10919106,
								end: 10922968,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-archives.php',
								start: 10922968,
								end: 10927208,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-block.php',
								start: 10927208,
								end: 10930416,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-calendar.php',
								start: 10930416,
								end: 10931902,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-categories.php',
								start: 10931902,
								end: 10936433,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-custom-html.php',
								start: 10936433,
								end: 10943575,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-links.php',
								start: 10943575,
								end: 10949014,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-media-audio.php',
								start: 10949014,
								end: 10953228,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-media-gallery.php',
								start: 10953228,
								end: 10958368,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-media-image.php',
								start: 10958368,
								end: 10967468,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-media-video.php',
								start: 10967468,
								end: 10973545,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-media.php',
								start: 10973545,
								end: 10981672,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-meta.php',
								start: 10981672,
								end: 10983870,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-pages.php',
								start: 10983870,
								end: 10987447,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-recent-comments.php',
								start: 10987447,
								end: 10991557,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-recent-posts.php',
								start: 10991557,
								end: 10995441,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-rss.php',
								start: 10995441,
								end: 10998619,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-search.php',
								start: 10998619,
								end: 11000011,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-tag-cloud.php',
								start: 11000011,
								end: 11004260,
							},
							{
								filename:
									'/wordpress/wp-includes/widgets/class-wp-widget-text.php',
								start: 11004260,
								end: 11016650,
							},
							{
								filename: '/wordpress/wp-includes/wp-db.php',
								start: 11016650,
								end: 11016829,
							},
							{
								filename: '/wordpress/wp-includes/wp-diff.php',
								start: 11016829,
								end: 11017178,
							},
							{
								filename: '/wordpress/wp-links-opml.php',
								start: 11017178,
								end: 11018789,
							},
							{
								filename: '/wordpress/wp-load.php',
								start: 11018789,
								end: 11020634,
							},
							{
								filename: '/wordpress/wp-login.php',
								start: 11020634,
								end: 11054959,
							},
							{
								filename: '/wordpress/wp-mail.php',
								start: 11054959,
								end: 11060906,
							},
							{
								filename: '/wordpress/wp-settings.php',
								start: 11060906,
								end: 11078872,
							},
							{
								filename: '/wordpress/wp-signup.php',
								start: 11078872,
								end: 11101790,
							},
							{
								filename: '/wordpress/wp-trackback.php',
								start: 11101790,
								end: 11105213,
							},
							{
								filename: '/wordpress/xmlrpc.php',
								start: 11105213,
								end: 11107036,
							},
						],
						remote_package_size: 11107036,
					});
				}
			})();
	});
}
export {
	E as default,
	z as defaultThemeName,
	j as dependenciesTotalSize,
	m as dependencyFilename,
};
