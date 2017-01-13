
'use strict';

exports.BASE_URL = 'http://ahs-ausd-ca.schoolloop.com';

exports.HEAD_ELEMENT_HTML = `
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i|Roboto+Slab:100,300,400,700" />
<link rel="stylesheet" href="/css/shared.css" />
`;

exports.LOGO_HTML = `
<h2>
    <a href="/">
        <img src="/images/azusa.png" width="150" alt="" />
        Azusa High School
    </a>
</h2>
<p>Home of the Mighty Aztecs</p>
`;

exports.SITE_MAP_URL = 'http://ahs-ausd-ca.schoolloop.com/portal/site_map?d=x';

exports.SECTIONS_DATA = [{
  title: 'Main Pages',
  pages: [
    {
      url: '/',
      title: 'Home'
    },
    {
      url: '/cms/month?d=x&group_id=1301752510104',
      title: 'Calendar'
    }
  ]
}];