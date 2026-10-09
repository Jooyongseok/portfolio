import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';

afterEach(cleanup);

describe('graduate research portfolio', () => {
  it('keeps academic identity and the CV action visible in the sidebar', () => {
    render(<App />);

    const sidebar = screen.getByRole('complementary', { name: '연구자 프로필' });
    expect(within(sidebar).getByText('주용석')).toBeInTheDocument();
    expect(within(sidebar).getByText('수원대학교 데이터과학부')).toBeInTheDocument();
    expect(within(sidebar).getByText('4.31 / 4.50')).toBeInTheDocument();
    expect(within(sidebar).getByText('2027년 2월')).toBeInTheDocument();

    const navigation = within(sidebar).getByRole('navigation', { name: '주요 탐색' });
    for (const label of ['Home', 'Research', 'Experience', 'Projects', 'CV']) {
      expect(within(navigation).getByRole('link', { name: label })).toBeInTheDocument();
    }

    expect(within(sidebar).getByRole('link', { name: 'English CV' })).toHaveAttribute(
      'href',
      './resume.html',
    );
  });

  it('opens with a research statement and three scannable research directions', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '현실의 데이터를 이해하는 AI를 연구합니다',
      }),
    ).toBeInTheDocument();

    for (const direction of ['Physical AI', 'AI × Bio', 'Multimodal Intelligence']) {
      expect(screen.getByRole('heading', { level: 2, name: direction })).toBeInTheDocument();
    }
  });

  it('presents selected evidence as problem, contribution, and result', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 2, name: /성균관대학교 양자생명물리과학원/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /ACCIDENT @ CVPR/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /TabPFN 기반 암 아형 분류 모델/ })).toBeInTheDocument();

    expect(screen.getAllByText('Problem')).toHaveLength(3);
    expect(screen.getAllByText('Contribution')).toHaveLength(3);
    expect(screen.getAllByText('Result')).toHaveLength(3);
    expect(screen.getByText('2nd Place')).toBeInTheDocument();
    expect(screen.getByText('정유담 · 주용석 · 안홍렬')).toBeInTheDocument();
  });

  it('keeps approved public contact and evidence links', () => {
    render(<App />);

    expect(screen.getAllByRole('link', { name: 'Email' })[0]).toHaveAttribute('href', 'mailto:ja020730ha@gmail.com');
    expect(screen.getAllByRole('link', { name: 'GitHub' })[0]).toHaveAttribute('href', 'https://github.com/Jooyongseok');
    expect(screen.getByRole('link', { name: /ACCIDENT @ CVPR/ })).toHaveAttribute(
      'href',
      'https://www.kaggle.com/competitions/accident',
    );
  });
});

describe('English academic CV', () => {
  it('renders as an English two-page document with matching academic facts', () => {
    const resume = readFileSync(resolve(process.cwd(), 'public/resume.html'), 'utf8');
    const document = new DOMParser().parseFromString(resume, 'text/html');

    expect(document.documentElement.lang).toBe('en');
    expect(document.querySelectorAll('[data-page]')).toHaveLength(2);

    for (const expected of [
      'Jooyongseok',
      'Suwon University',
      'Department of Data Science',
      'GPA 4.31 / 4.50',
      'Expected February 2027',
      'Research Interests',
      'Publication',
      'Research Experience',
      'Institute of Quantum Biophysics',
      'ACCIDENT @ CVPR',
      '2nd Place',
      'Entrepreneurship & Leadership',
      'Selected Software Projects',
      'Technical Skills',
    ]) {
      expect(document.body.textContent).toContain(expected);
    }

    expect(resume).not.toContain('현실의 데이터를 이해하는 AI를 연구합니다');
  });
});
