<?php

/**
 * @license LGPLv3, https://opensource.org/licenses/LGPL-3.0
 * @copyright Aimeos (aimeos.org), 2017-2023
 */


namespace Aimeos\Base\View\Engine;


class TestEngine implements \Aimeos\Base\View\Engine\Iface
{
	public function render( \Aimeos\Base\View\Iface $view, string $filename, array $values = [] ) : string
	{
		ob_start();
		include $filename;
		return ob_get_clean();
	}
}
