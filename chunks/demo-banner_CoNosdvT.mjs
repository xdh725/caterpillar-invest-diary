const demoBanner = new Proxy({"src":"/caterpillar-invest-diary/_astro/demo-banner.ad2Sv-9a.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/blogs/caterpillar-invest-diary/src/assets/images/demo-banner.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/blogs/caterpillar-invest-diary/src/assets/images/demo-banner.png");
							return target[name];
						}
					});

export { demoBanner as default };
