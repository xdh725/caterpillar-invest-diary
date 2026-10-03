const avatar = new Proxy({"src":"/caterpillar-invest-diary/_astro/avatar.BYFcSYdM.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/blogs/caterpillar-invest-diary/src/assets/images/avatar.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/blogs/caterpillar-invest-diary/src/assets/images/avatar.png");
							return target[name];
						}
					});

export { avatar as default };
