/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { useState } from "@wordpress/element";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit() {
	// State to manage the active panel of the accordion
	const [activePanel, setActivePanel] = useState(null);

	/**
	 * Function to toggle the active panel of the accordion.
	 *
	 * @param {number} panelIndex The index of the panel to toggle.
	 */
	const togglePanel = (panelIndex) => {
		setActivePanel(activePanel === panelIndex ? null : panelIndex);
	};

	return (
		<div className="faq-accordion-block">
			{/* Heading for the FAQ Accordion block */}
			<div className="faq-accordion-heading">
				<h2>FAQs</h2>
			</div>
			{/* List of FAQ items */}
			<ul className="faq-accordion-list">
				{/* FAQ Item 1 */}
				<li className={`faq-panel ${activePanel === 0 ? "is-open" : ""}`}>
					<button
						className={`faq-accordion-panel ${
							activePanel === 0 ? "is-open" : ""
						}`}
						onClick={() => togglePanel(0)}
					>
						<h3>
							{/* SVG Icon for the FAQ link */}
							<svg
								className="faq-link-icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
							>
								<path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
							</svg>
							{/* SVG Icon for the FAQ Arrows */}
							<svg
								className={`faq-chevron-icon ${
									activePanel === 0 ? "is-open" : ""
								}`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
							</svg>{" "}
							What is enterprise WordPress development?
						</h3>
						<div className="faq-accordion-content">
							{activePanel === 0 && (
								<p>
									Enterprise-grade WordPress solutions are built to deliver
									optimum performance and sport extremely dependable
									infrastructure empowered with cutting-edge functionality that
									can smoothly scale to meet the growing demands of large
									organizations.
								</p>
							)}
						</div>
					</button>
				</li>
				{/* FAQ Item 2 */}
				<li className={`faq-panel ${activePanel === 1 ? "is-open" : ""}`}>
					<button
						className={`faq-accordion-panel ${
							activePanel === 1 ? "is-open" : ""
						}`}
						onClick={() => togglePanel(1)}
					>
						<h3>
							{/* SVG Icon for the FAQ link */}
							<svg
								className="faq-link-icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
							>
								<path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
							</svg>
							{/* SVG Icon for the FAQ Arrows */}
							<svg
								className={`faq-chevron-icon ${
									activePanel === 1 ? "is-open" : ""
								}`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
							</svg>{" "}
							What is WordPress VIP?
						</h3>
						<div className="faq-accordion-content">
							{activePanel === 1 && (
								<p>
									If you want to build a large-scale website, WordPress VIP is
									your answer. It is a WordPress hosting platform whose
									categorical objective is to host enterprise websites. It’s the{" "}
									<strong>
										right choice for extremely high-traffic websites
									</strong>{" "}
									and which demand the{" "}
									<strong>next level of performance and security.</strong>
								</p>
							)}
						</div>
					</button>
				</li>
				{/* FAQ Item 3 */}
				<li className={`faq-panel ${activePanel === 2 ? "is-open" : ""}`}>
					<button
						className={`faq-accordion-panel ${
							activePanel === 2 ? "is-open" : ""
						}`}
						onClick={() => togglePanel(2)}
					>
						<h3>
							{/* SVG Icon for the FAQ link */}
							<svg
								className="faq-link-icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
							>
								<path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
							</svg>
							{/* SVG Icon for the FAQ Arrows */}
							<svg
								className={`faq-chevron-icon ${
									activePanel === 2 ? "is-open" : ""
								}`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
							</svg>{" "}
							My organization needs an enterprise-class website. Is choosing
							WordPress a good idea?
						</h3>
						<div className="faq-accordion-content">
							{activePanel === 2 && (
								<p>
									Yes, WordPress can perfectly satisfy your enterprise needs as
									it’s a <strong>very stable and ever-evolving CMS</strong> with
									a <strong>plethora of advanced plugins</strong> that you can
									choose from. What’s more, WordPress can{" "}
									<strong>
										easily integrate with numerous business-critical platforms
									</strong>{" "}
									including CRM and ERP systems and even marketing automation
									platforms.
								</p>
							)}
						</div>
					</button>
				</li>
				{/* FAQ Item 4 */}
				<li className={`faq-panel ${activePanel === 3 ? "is-open" : ""}`}>
					<button
						className={`faq-accordion-panel ${
							activePanel === 3 ? "is-open" : ""
						}`}
						onClick={() => togglePanel(3)}
					>
						<h3>
							{/* SVG Icon for the FAQ link */}
							<svg
								className="faq-link-icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
							>
								<path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
							</svg>
							{/* SVG Icon for the FAQ Arrows */}
							<svg
								className={`faq-chevron-icon ${
									activePanel === 3 ? "is-open" : ""
								}`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
							</svg>{" "}
							What is your process for website development?
						</h3>
						<div className="faq-accordion-content">
							{activePanel === 3 && (
								<p>
									<a href="https://www.multidots.com/multidots-production-process/">
										Here
									</a>{" "}
									is our website development process.
								</p>
							)}
						</div>
					</button>
				</li>
				{/* FAQ Item 5 */}
				<li className={`faq-panel ${activePanel === 4 ? "is-open" : ""}`}>
					<button
						className={`faq-accordion-panel ${
							activePanel === 4 ? "is-open" : ""
						}`}
						onClick={() => togglePanel(4)}
					>
						<h3>
							{/* SVG Icon for the FAQ link */}
							<svg
								className="faq-link-icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
							>
								<path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
							</svg>
							{/* SVG Icon for the FAQ Arrows */}
							<svg
								className={`faq-chevron-icon ${
									activePanel === 4 ? "is-open" : ""
								}`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
							</svg>{" "}
							What sets you apart from other agencies offering web development
							and WordPress development services?
						</h3>
						<div className="faq-accordion-content">
							{activePanel === 4 && (
								<p>
									<ul>
										<li>
											<strong>11+ years of experience</strong>&nbsp;in web
											development and WordPress development.
										</li>
										<li>
											<span>One of the WordPress VIP Partner</span>
											<span> Agencies</span>
											<span>.</span>
										</li>
										<li>
											<strong>80+ globally distributed</strong> team available{" "}
											<span>around the clock.</span>
										</li>
										<li>
											Experience working with&nbsp;
											<strong>
												a small startup to large enterprise brands such as{" "}
											</strong>
											Accenture, Jumeirah, National Association of Broadcasters,
											and Sneaker News.
										</li>
										<li>
											<strong>Core contributor&nbsp;</strong>to WordPress and a
											variety of different open-source initiatives and events.
										</li>
										<li>
											Active and proud members of a variety of different&nbsp;
											<strong>
												industry associations and chambers of commerce
											</strong>
											.
										</li>
									</ul>
								</p>
							)}
						</div>
					</button>
				</li>
				{/* FAQ Item 5 */}
				<li className={`faq-panel ${activePanel === 5 ? "is-open" : ""}`}>
					<button
						className={`faq-accordion-panel ${
							activePanel === 5 ? "is-open" : ""
						}`}
						onClick={() => togglePanel(5)}
					>
						<h3>
							{/* SVG Icon for the FAQ link */}
							<svg
								className="faq-link-icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
							>
								<path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
							</svg>
							{/* SVG Icon for the FAQ Arrows */}
							<svg
								className={`faq-chevron-icon ${
									activePanel === 5 ? "is-open" : ""
								}`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
							</svg>{" "}
							How do you provide post-launch support?
						</h3>
						<div className="faq-accordion-content">
							{activePanel === 5 && (
								<p>
									We provide 1 to 3 months of free support based on the nature
									and size of the project. After free support, we have separate
									retainer and maintenance services that will cover ongoing
									hassle-free support and maintenance of your website.
								</p>
							)}
						</div>
					</button>
				</li>
			</ul>
		</div>
	);
}
