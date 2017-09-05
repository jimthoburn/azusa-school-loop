
'use strict';

exports.BASE_URL = 'http://ahs-ausd-ca.schoolloop.com';

exports.HEAD_ELEMENT_HTML = `
<!--
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
-->

<meta name="robots" content="noindex" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i|Roboto+Slab:100,300,400,700" />
<link rel="stylesheet" href="/css/shared.css" />
`;

exports.LOGO_HTML = `
<a href="/">
  <h2><img src="/images/azusa.png" width="150" alt="Azusa High School" /></h2>
</a>
`;

exports.FOOTER_HTML = `
<div class="contact">
  <div>
    <h2>Azusa High School</h2>
    <p>240 North Cerritos Avenue<br />Azusa, CA 91702 </p>
    <p>626-815-3400</p>
  </div>

  <p><strong>Dr. Martin Gomez, Principal</strong><br /><a href="mailto:mgomez4@azusa.org">mgomez4@azusa.org</a></p>
</div>

<div class="legal">
  <h2><a href="http://azusa.org"><img src="/images/azusa-district.png" width="100" height="100" alt="Azusa Unified School District" /></a></h2>
  <p>The District prohibits, at any district school or school activity, unlawful discrimination, harassment, intimidation, and bullying of any student based on the student’s actual race, color, ancestry, national origin, ethnic group, identication, age, religion, marital or parental status, physical or mental disability, sex, sexual orientation, gender, gender identity, or gender expression; the perception of one or more of such characteristics; or association with a person or group with one or more these actual or perceived characteristics.</p>
</div>
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
    },
    {"url":"/cms/page_view?d=x&piid=&vpid=1344353760609","title":"College and Career Calendar"},{"url":"/presentations","title":"Upcoming Presentations, Deadlines & Events"},{"url":"/cms/page_view?d=x&piid=&vpid=1349522606978","title":"Job Search Sites"},{"url":"/careerresources","title":"Career Resources"},{"url":"/careertrainingprograms","title":"Career Training Programs"},{"url":"/testing","title":"Career & College Testing"},{"url":"/collegeresources","title":"College Planning  Resources"},{"url":"/collegeapp","title":"College Applications & Essays"},{"url":"/specificschools","title":"Links to Specific Colleges & Universities"},{"url":"/letterofrecommendation","title":"Letter of Recommendation Information"},{"url":"/financialaid","title":"Financial Aid & Scholarships"},{"url":"/cms/page_view?d=x&piid=&vpid=1350722460838","title":"Information for Undocumented Students"},{"url":"/timelines","title":"Student Timelines by Grade Level"},{"url":"/cms/page_view?d=x&piid=&vpid=1351250114658","title":"Educational Resources"},{"url":"/legaldoc","title":"Legal Documents"},{"url":"/cms/page_view?d=x&piid=&vpid=1351250123718","title":"Staff"},{"url":"/donor","title":"Would You Like To Offer A Scholarship?"},{"url":"/cms/page_view?d=x&piid=&vpid=1433066601111","title":"2016-17 Seniors"}]
}
];
