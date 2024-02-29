<?php

/**
 * @license LGPLv3, https://opensource.org/licenses/LGPL-3.0
 * @copyright Metaways Infosystems GmbH, 2011
 * @copyright Aimeos (aimeos.org), 2015-2023
 * @package Base
 * @subpackage Common
 */


namespace Aimeos\Base\Criteria\Expression\Sort;


/**
 * Interface for sorting objects.
 *
 * @package Base
 * @subpackage Common
 */
interface Iface extends \Aimeos\Base\Criteria\Expression\Iface
{
	/**
	 * Returns the name of the variable or column to sort.
	 *
	 * @return string Name of variable or column that should be compared.
	 */
	public function getName() : string;
}
