/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import Template from '../../ui/template.js';
import BalloonPanelView from '../../ui/balloonpanel/balloonpanelview.js';

/**
 * The link balloon panel view class.
 *
 * See {@link ui.balloonPanel.BalloonPanelView}.
 *
 * @memberOf link.ui
 * @extends ui.View
 */
export default class LinkBalloonPanelView extends BalloonPanelView {
	/**
	 * @inheritDoc
	 */
	constructor( locale ) {
		super( locale );

		Template.extend( this.template, {
			attributes: {
				class: [
					'ck-link-balloon-panel',
				]
			}
		} );
	}
}
