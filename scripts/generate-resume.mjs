import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const data = JSON.parse(readFileSync(resolve(root, 'src/content/portfolio.json'), 'utf8'));
const { profile, researchInterests, selectedEvidence, additionalAchievements, leadership, projects, skills } = data;
const [research, competition, publication] = selectedEvidence;

const linkAttrs = 'target="_blank" rel="noreferrer"';
const interests = researchInterests.map((item) => `<div><h3>${item.title}</h3><p>${item.summaryEn}</p></div>`).join('');
const researchBullets = research.bulletsEn.map((item) => `<li>${item}</li>`).join('');
const leadershipBullets = leadership.bulletsEn.map((item) => `<li>${item}</li>`).join('');
const projectRows = projects.map((project) => `<div class="project"><h3>${project.title}</h3><p>${project.summaryEn}</p></div>`).join('');

const sidebar = (page) => `
  <aside>
    <p class="cv-mark">JY.</p>
    <div class="cv-name"><h1>${profile.nameEn}</h1><p>${profile.nameKo}</p></div>
    ${page === 1 ? `<address><a href="mailto:${profile.email}">${profile.email}</a><a href="tel:${profile.phone.replaceAll('-', '')}">${profile.phone}</a><a href="${profile.github}" ${linkAttrs}>github.com/Jooyongseok</a></address>` : ''}
    <dl><div><dt>University</dt><dd>${profile.universityEn}<br>${profile.majorEn}</dd></div><div><dt>GPA</dt><dd>${profile.gpa}</dd></div><div><dt>Graduation</dt><dd>February 2027</dd></div></dl>
    <p class="page-no">0${page} / 02</p>
  </aside>`;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="data:,">
  <meta name="description" content="Jooyongseok's academic research CV">
  <title>Jooyongseok · Academic Research CV</title>
  <style>
    :root{--navy:#173d5a;--blue:#1a5b8c;--ink:#142132;--muted:#5f6f80;--rule:#cbd8e2;--soft:#f3f7fa}
    *{box-sizing:border-box} body{margin:0;background:#dfe8ee;color:var(--ink);font:9pt/1.42 Arial,"Noto Sans KR",sans-serif} a{color:inherit;text-decoration:none} p,h1,h2,h3,dl,dd{margin:0}
    .page{display:grid;grid-template-columns:46mm 1fr;width:210mm;height:297mm;margin:10mm auto;background:#fff;box-shadow:0 8px 28px rgb(23 61 90/.13);break-after:page;overflow:hidden}
    aside{position:relative;padding:15mm 7mm 12mm;background:var(--navy);color:#fff}.cv-mark{font:700 17pt/1 Georgia,serif}.cv-name{margin-top:20mm}.cv-name h1{font-size:18pt;line-height:1.05;letter-spacing:-.035em}.cv-name p{margin-top:2mm;color:#c9deeb;font-size:9pt}address{display:flex;flex-direction:column;gap:1.4mm;margin-top:13mm;font-size:7.4pt;font-style:normal;word-break:break-all}aside dl{margin-top:12mm;padding-top:5mm;border-top:.25mm solid rgb(255 255 255/.28)}aside dl>div+div{margin-top:5mm}dt{color:#b9d4e5;font-size:6.6pt;font-weight:700;letter-spacing:.1em;text-transform:uppercase}dd{margin-top:1mm;font-size:8.4pt;font-weight:600}.page-no{position:absolute;bottom:11mm;left:7mm;color:#a9c9dc;font-size:7pt;letter-spacing:.14em}
    .cv-main{padding:13mm 13mm 10mm}.cv-header{display:flex;justify-content:space-between;align-items:end;padding-bottom:4mm;border-bottom:.5mm solid var(--navy)}.cv-header h2{font:700 22pt/1 Georgia,serif;letter-spacing:-.04em}.cv-header p{color:var(--blue);font-size:6.8pt;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
    section{display:grid;grid-template-columns:27mm 1fr;gap:7mm;padding:5mm 0;border-bottom:.25mm solid var(--rule)}section>h2{color:var(--blue);font-size:7.1pt;letter-spacing:.1em;text-transform:uppercase}.entry{display:grid;grid-template-columns:28mm 1fr;gap:5mm}.meta{color:var(--muted);font-size:7.2pt}.entry h3{font-size:9.2pt;line-height:1.3}.entry p{margin-top:1mm;color:var(--muted);font-size:7.8pt}.interests{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm}.interests>div+div{padding-left:4mm;border-left:.25mm solid var(--rule)}.interests h3{font-size:8.5pt}.interests p{margin-top:1.5mm;color:var(--muted);font-size:7.4pt}.publication-title{font:700 9pt/1.35 Georgia,serif}.authors{margin-top:1.5mm;color:var(--muted);font-size:7.5pt}.entry ul{margin:2mm 0 0;padding-left:4.5mm;color:#42566a;font-size:7.6pt;line-height:1.46}.entry li+li{margin-top:.8mm}
    .award+.award{margin-top:3mm;padding-top:3mm;border-top:.25mm solid var(--rule)}.award strong{font-size:8.7pt}.award p{margin-top:1mm;color:var(--muted);font-size:7.6pt}.projects{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm}.project+.project{padding-left:4mm;border-left:.25mm solid var(--rule)}.project h3{font-size:9pt}.project p{margin-top:1mm;color:var(--muted);font-size:7.3pt}.skills p+p{margin-top:2mm}.skills strong{display:inline-block;width:34mm;color:var(--navy)}
    @page{size:A4;margin:0}@media print{body{background:#fff}.page{margin:0;box-shadow:none}.page:last-child{break-after:auto}}@media(max-width:800px){.page{width:100%;height:auto;min-height:297mm;margin:0;grid-template-columns:42mm 1fr}.cv-main{padding-inline:8mm}}
  </style>
</head>
<body>
  <article class="page" data-page="1">
    ${sidebar(1)}
    <main class="cv-main">
      <header class="cv-header"><h2>${profile.nameEn}</h2><p>Academic Research CV · Page 1</p></header>
      <section><h2>Education</h2><div class="entry"><p class="meta">${profile.expectedEn}</p><div><h3>${profile.universityEn}</h3><p>${profile.majorEn} · GPA ${profile.gpa}</p></div></div></section>
      <section><h2>Research Interests</h2><div class="interests">${interests}</div></section>
      <section><h2>Publication</h2><div class="entry"><p class="meta">${publication.venue} · ${publication.period}</p><div><p class="publication-title"><a href="${publication.href}" ${linkAttrs}>${publication.titleEn}</a></p><p class="authors">Authors: ${publication.authors}</p></div></div></section>
      <section><h2>Research Experience</h2><div class="entry"><p class="meta">${research.period}</p><div><h3>${research.titleEn}</h3><ul>${researchBullets}</ul></div></div></section>
    </main>
  </article>
  <article class="page" data-page="2">
    ${sidebar(2)}
    <main class="cv-main">
      <header class="cv-header"><h2>${profile.nameEn}</h2><p>Academic Research CV · Page 2</p></header>
      <section><h2>Awards</h2><div><div class="award"><strong><a href="${competition.href}" ${linkAttrs}>${competition.titleEn}</a></strong><p>${competition.contributionEn}</p></div><div class="award"><strong><a href="${additionalAchievements[0].href}" ${linkAttrs}>${additionalAchievements[0].titleEn} · ${additionalAchievements[0].result}</a></strong><p>${additionalAchievements[0].detailEn}</p></div></div></section>
      <section><h2>Entrepreneurship &amp; Leadership</h2><div class="entry"><p class="meta">${leadership.period}</p><div><h3>${leadership.organizationEn} · ${leadership.role}</h3><ul>${leadershipBullets}</ul></div></div></section>
      <section><h2>Selected Software Projects</h2><div class="projects">${projectRows}</div></section>
      <section><h2>Technical Skills</h2><div class="skills"><p><strong>Languages</strong>${skills.languages.join(', ')}</p><p><strong>Frameworks &amp; Tools</strong>${skills.tools.join(', ')}</p></div></section>
    </main>
  </article>
</body>
</html>`;

writeFileSync(resolve(root, 'public/resume.html'), html, 'utf8');
console.log('Generated public/resume.html from src/content/portfolio.json');
