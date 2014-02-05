'use strict';

var license = {
  AFL2: 'AFL 2.1',
  AFL3: 'AFL 3.0',
  AGPL3: 'AGPL 3.0',
  CCBY: 'CC 3.0 BY',
  CCBYND: 'CC 3.0 BY-ND',
  CCBYSA: 'CC 3.0 BY-SA',
  CCBYNC: 'CC 3.0 BY-NC',
  CCBYNDSA: 'CC 3.0 BY-ND-SA',
  CCBYNCSA: 'CC 3.0 BY-NC-SA',
  CCBYNCND: 'CC 3.0 BY-NC-ND',
  APL1: 'APL 1.0',
  ARTISTIC2: 'Artistic 2.0',
  Apache2: 'Apache 2.0',
  Apache: 'Apache',
  BEER: 'Beerware',
  BSD2: 'BSD 2-Clause',
  BSD3: 'BSD 3-Clause',
  BSD: 'BSD 4-Clause',
  BSL1: 'BSL 1.0',
  CDDL1: 'CDDL 1.0',
  GPL2: 'GPL 2.0',
  GPL3: 'GPL 3.0',
  GPL: 'GPL',
  ISC: 'ISC',
  JSON: 'JSON.org',
  LGPL2: 'LGPL 2.1',
  LGPL3: 'LGPL 3.0',
  LGPL: 'LGPL',
  MIT: 'MIT',
  MPL2: 'MPL 2.0',
  MPL: 'MPL 1.0',
  NASA1: 'NASA 1.3',
  PROPRIETARY: 'Proprietary',
  PSF: 'Python 2.0',
  PUBLIC: 'Public Domain',
  UNLICENSE: 'Unlicense',
  WTFPL: 'WTFPL',
  ZLIB: 'zlib/libpng',
};

//
// Map commonly used terms to a normal license value as you can usually specify
// your license type in so many ways. By mapping this, we can create a more
// readable format for each license type.
//
module.exports = {
  '"BSD"': license.BSD,
  '(Un)license': license.UNLICENSE,
  '2-clause BSD': license.BSD2,
  '3-clause BSD': license.BSD3,
  'AFLv2.1': license.AFL2,
  'AGPL 3': license.AGPL3,
  'AGPL 3.0': license.AGPL3,
  'AGPL v3': license.AGPL3,
  'AGPL': license.AGPL3,
  'AGPL-3': license.AGPL3,
  'AGPL-3.0': license.AGPL3,
  'AGPL3': license.AGPL3,
  'AGPLv3': license.AGPL3,
  'AGPLv3+': license.AGPL3,
  'ALv2': license.AFL2,
  'APACHE 2.0': license.Apache2,
  'APACHE V2.0': license.Apache2,
  'APACHE': license.Apache,
  'APACHE-2.0': license.Apache2,
  'APACHE2': license.Apache2,
  'APACHE2.0': license.Apache2,
  'APACHE2_0': license.Apache2,
  'APACHEv2': license.Apache2,
  'APL': license.APL1,
  'APLv2': license.Apache2,
  'ARTISTIC 2.0': license.ARTISTIC2,
  'Affero General Public License v3': license.AGPL3,
  'Apache (2.0)': license.Apache2,
  'Apache 2 License': license.Apache2,
  'Apache 2': license.Apache2,
  'Apache 2.0': license.Apache2,
  'Apache License 2': license.Apache2,
  'Apache License 2.0': license.Apache2,
  'Apache License Version 2': license.Apache2,
  'Apache License Version 2.0': license.Apache2,
  'Apache License v2': license.Apache2,
  'Apache License v2.0': license.Apache2,
  'Apache License version 2.0': license.Apache2,
  'Apache License': license.Apache,
  'Apache License, Version 2.0': license.Apache2,
  'Apache License, Version 2.0, http://www.apache.org/licenses/LICENSE-2.0': license.Apache2,
  'Apache Public License (version 2)': license.Apache2,
  'Apache Public License v2': license.Apache2,
  'Apache Public License, Version 2': license.Apache2,
  'Apache Software License 2.0': license.Apache2,
  'Apache V2': license.Apache2,
  'Apache V2.0': license.Apache2,
  'Apache v2 License': license.Apache2,
  'Apache v2 license': license.Apache,
  'Apache v2': license.Apache2,
  'Apache v2.0': license.Apache2,
  'Apache version 2.0': license.Apache2,
  'Apache': license.Apache,
  'Apache, Version 2.0': license.Apache2,
  'Apache-2': license.Apache2,
  'Apache-2.0': license.Apache2,
  'Apache-V2': license.Apache2,
  'Apache2': license.Apache2,
  'Apache2.0': license.Apache2,
  'Appcelerator Proprietary and Confidential': license.PROPRIETARY,
  'Artistic-2.0': license.ARTISTIC2,
  'Attribution-NonCommercial 2.5 Generic (CC BY-NC 2.5)': license.CCBYNC,
  'Attribution-ShareAlike 3.0 Unported': license.CCBYSA,
  'BOOST': license.BSL1,
  'BSD 2 Clause': license.BSD2,
  'BSD 2-Clause License': license.BSD2,
  'BSD 2-Clause license': license.BSD2,
  'BSD 2-Clause': license.BSD2,
  'BSD 2-clause license': license.BSD2,
  'BSD 3-Clause License': license.BSD3,
  'BSD 3-Clause': license.BSD3,
  'BSD License': license.BSD,
  'BSD New': license.BSD3,
  'BSD': license.BSD,
  'BSD-2-Clause': license.BSD2,
  'BSD-3': license.BSD3,
  'BSD-3-Clause': license.BSD3,
  'BSD-new': license.BSD3,
  'BSD2': license.BSD2,
  'BSD3': license.BSD3,
  'BeerWare': license.BEER,
  'Beerware': license.BEER,
  'CC BY-NC 3.0': license.CCBYNC,
  'CC BY-NC': license.CCBYNC,
  'CC BY-NC-SA': license.CCBYNCSA,
  'CC BY-SA 3.0': license.CCBYSA,
  'CC BY-SA v3.0': license.CCBYSA,
  'CC': license.CCBY,
  'CC-0': license.CCBY,
  'CC-BY 2.0': license.CCBY,
  'CC-BY-NC-SA': license.CCBYNCSA,
  'CC-BY-SA': license.CCBYSA,
  'CC-By-SA 3.0': license.CCBYSA,
  'CC-SA-BY-3.0': license.CCBYSA,
  'CC-by-SA': license.CCBYSA,
  'CC0 1.0': license.CCBY,
  'CC3': license.CCBY,
  'CC_by_3.0': license.CCBY,
  'CDDL': license.CDDL1,
  'Closed Source': license.PROPRIETARY,
  'Copyrighted - CC BY-NC-ND': license.CCBYNCND,
  'Creative Commons - Attribution 3.0': license.CCBY,
  'Creative Commons 3.0': license.CCBY,
  'Creative Commons Attribution 3.0 Unported License': license.CCBY,
  'Creative Commons Attribution': license.CCBY,
  'Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported (CC BY-NC-SA 3.0)': license.CCBYNCSA,
  'Creative Commons Attribution-ShareAlike 3.0 Unported': license.CCBYSA,
  'Creative Commons Attribution-ShareAlike 3.0': license.CCBYSA,
  'Creative Commons BY-NC-SA License 3.0': license.CCBYNCSA,
  'Creative Commons Legal Code Attribution-NonCommercial-NoDerivs 3.0': license.CCBYNCND,
  'Creative Commons License 2.5': license.CCBY,
  'Creative Commons attribution and share-alike license': license.CCBYSA,
  'Creative Commons': license.CCBY,
  'DO-WHAT-YOU-WANT': license.WTFPL,
  'DWTFYW': license.WTFPL,
  'Do What the Fuck You Want to Public License': license.WTFPL,
  'Doug Crockford\'s license that allows this module to be used for Good but not for Evil': license.JSON,
  'Free as in Hugs Licence': license.PUBLIC,
  'Free as in Hugs License': license.PUBLIC,
  'Free as in Hugs': license.PUBLIC,
  'Free': license.PUBLIC,
  'FreeBSD': license.BSD2,
  'GLP v.3': license.GPL3,
  'GLP v2.0': license.GPL2,
  'GLP': license.GPL,
  'GNU AFFERO GENERAL PUBLIC LICENSE': license.AGPL3,
  'GNU AGPL v3.0': license.AGPL3,
  'GNU Affero General Public License': license.AGPL3,
  'GNU GENERAL PUBLIC LICENSE': license.GPL,
  'GNU GPL 2': license.GPL2,
  'GNU GPL V3': license.GPL3,
  'GNU GPL v3': license.GPL3,
  'GNU GPL': license.GPL,
  'GNU GPLv3': license.GPL3,
  'GNU General Public License': license.GPL,
  'GNU LGPL v3.0': license.LGPL3,
  'GNU LGPL': license.LGPL,
  'GNU Library General Public License': license.LGPL,
  'GNU v3': license.GPL3,
  'GNU': license.GPL,
  'GNU-GPL-2': license.GPL2,
  'GPL 2': license.GPL2,
  'GPL 2.0': license.GPL2,
  'GPL 3': license.GPL3,
  'GPL 3.0': license.GPL3,
  'GPL Version 3': license.GPL3,
  'GPL v2': license.GPL2,
  'GPL v2+': license.GPL2,
  'GPL v3': license.GPL3,
  'GPL v3.0': license.GPL3,
  'GPL': license.GPL,
  'GPL-2': license.GPL2,
  'GPL-2.0': license.GPL2,
  'GPL-3': license.GPL3,
  'GPL-3.0': license.GPL3,
  'GPL-v2': license.GPL2,
  'GPL2': license.GPL2,
  'GPL3': license.GPL3,
  'GPLv2 (or later)': license.GPL3,
  'GPLv2': license.GPL2,
  'GPLv3': license.GPL3,
  'GPOL': license.GPL,
  'Google-BSD': license.BSD,
  'ISC (http://www.isc.org/software/license)': license.ISC,
  'ISC License': license.ISC,
  'ISC': license.ISC,
  'JSON': license.JSON,
  'LGP': license.LGPL,
  'LGPL 2.1': license.LGPL2,
  'LGPL 2.1+': license.LGPL2,
  'LGPL 3': license.LGPL3,
  'LGPL 3.0': license.LGPL3,
  'LGPL License': license.LGPL,
  'LGPL V3': license.LGPL3,
  'LGPL v3': license.LGPL3,
  'LGPL': license.LGPL,
  'LGPL+': license.LGPL,
  'LGPL-2': license.LGPL2,
  'LGPL-3': license.LGPL3,
  'LGPL-3.0': license.LGPL3,
  'LGPL3': license.LGPL3,
  'LGPL3.0': license.LGPL3,
  'LGPLv2.1': license.GPL2,
  'LGPLv2.1+': license.LGPL2,
  'LGPLv21': license.LGPL2,
  'LGPLv3': license.LGPL3,
  'LGPLv3+': license.LGPL3,
  'LGPLv3.0': license.LGPL3,
  'MIT ': license.MIT,
  'MIT (http://mootools.net/license.txt)': license.MIT,
  'MIT <http://opensource.org/licenses/MIT>': license.MIT,
  'MIT Licence': license.MIT,
  'MIT License (see License)': license.MIT,
  'MIT License (see Readme)': license.MIT,
  'MIT License': license.MIT,
  'MIT license': license.MIT,
  'MIT': license.MIT,
  'MIT-License': license.MIT,
  'MIT/X': license.MIT,
  'MIT/X11': license.MIT,
  'MPL 1.1': license.MPL,
  'MPL 2.0': license.MPL2,
  'MPL v2.0': license.MPL2,
  'MPL': license.MPL,
  'MPL-2': license.MPL2,
  'MPL-2.0': license.MPL2,
  'MPL/2.0': license.MPL2,
  'MPL2': license.MPL2,
  'MPL2.0': license.MPL2,
  'MPLv2': license.MPL2,
  'MPLv2.0': license.MPL2,
  'MTI': license.MIT,
  'Mit': license.MIT,
  'Modified MIT / BSD': license.BSD,
  'Mozilla Public License 2.0': license.MPL2,
  'Mozilla Public License Version 2.0': license.MPL2,
  'Mozilla Public License': license.MPL,
  'NASA-1.3': license.NASA1,
  'NEW BSD': license.BSD3,
  'New BSD License': license.BSD3,
  'New BSD': license.BSD3,
  'New-BSD': license.BSD3,
  'NewBSD': license.BSD3,
  'Open Source- GPL': license.GPL,
  'PROPRIETARY': license.PROPRIETARY,
  'PSF': license.PSF,
  'PUBLIC DOMAIN (UNLICENSED)': license.PUBLIC,
  'PUBLIC LICENSE': license.PUBLIC,
  'Private': license.PROPRIETARY,
  'Proprietary': license.PROPRIETARY,
  'Public Domain': license.PUBLIC,
  'Public domain': license.PUBLIC,
  'Simplified BSD (see License)': license.BSD2,
  'Simplified BSD License': license.BSD2,
  'Simplified BSD-3': license.BSD3,
  'The MIT Licence': license.MIT,
  'The MIT License (MIT)': license.MIT,
  'The MIT License': license.MIT,
  'The Software shall be used for Good, not Evil. (see LICENSE)': license.JSON,
  'To Use: WTFPL, To Contribute: Dojo CLA': license.WTFPL,
  'UNLICENSE': license.UNLICENSE,
  'UNLICENSED': license.UNLICENSE,
  'Unlicense <http://unlicense.org/>': license.UNLICENSE,
  'Unlicense': license.UNLICENSE,
  'WTFPL': license.WTFPL,
  'WTFPLv2': license.WTFPL,
  'X11 License': license.MIT,
  'X11': license.MIT,
  'X11-style': license.MIT,
  'ZLIB': license.ZLIB,
  'apache 2': license.Apache2,
  'apache 2.0': license.Apache2,
  'apache2 actually': license.Apache2,
  'apache2': license.Apache2,
  'apachev2': license.Apache2,
  'bsd': license.BSD,
  'cc-by-sa': license.CCBYSA,
  'free': license.PUBLIC,
  'freeBSD': license.BSD3,
  'gnu': license.GPL,
  'gpl-3.0': license.GPL3,
  'gpl-v3.0': license.GPL3,
  'http://creativecommons.org/licenses/by/3.0/': license.CCBY,
  'http://opensource.org/licenses/MIT': license.MIT,
  'http://unlicense.org/': license.UNLICENSE,
  'http://wtfpl.org': license.WTFPL,
  'http://wtfpl.org/': license.WTFPL,
  'http://www.apache.org/licenses/LICENSE-2.0': license.Apache2,
  'http://www.apache.org/licenses/LICENSE-2.0.txt': license.Apache2,
  'mit': license.MIT,
  'mti': license.MIT,
  'my own': license.PROPRIETARY,
  'new BSD': license.BSD3,
  'no': license.PUBLIC,
  'none': license.PUBLIC,
  'propriatry': license.PROPRIETARY,
  'proprietary': license.PROPRIETARY,
  'public domain': license.PUBLIC,
  'unlicense': license.UNLICENSE,
  'unlicensed': license.UNLICENSE,
  'wtfpl': license.WTFPL,
  'zlib': license.ZLIB,
  'zlib/libpng': license.ZLIB
};

//
// Ensure that we didn't create any undefined references.
//
Object.keys(module.exports).forEach(function check(key) {
  if (!module.exports[key]) throw new Error('Invalid reference for:'+ key);
});
