import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PageLoading from '@/components/PageLoading';
import ErrorBoundary from '@/components/ErrorBoundary';
import s from './index.scss';

const Home = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Home'));
const Articles = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Articles'));
const Classes = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Classes'));
const Tags = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Tags'));
const Gallery = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Gallery'));
const Say = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Say'));
const Msg = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Msg'));
const Link = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Link'));
const Show = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Show'));
const Log = lazy(() => import(/* webpackPrefetch:true */ '@/pages/Log'));
const About = lazy(() => import(/* webpackPrefetch:true */ '@/pages/About'));

const Main: React.FC = () => {
  return (
    <main className={s.main}>
      <div className={s.center}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='articles' element={<Articles />} />
              <Route path='classes' element={<Classes />} />
              <Route path='tags' element={<Tags />} />
              <Route path='gallery' element={<Gallery />} />
              <Route path='say' element={<Say />} />
              <Route path='msg' element={<Msg />} />
              <Route path='link' element={<Link />} />
              <Route path='show' element={<Show />} />
              <Route path='log' element={<Log />} />
              <Route path='about' element={<About />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Main;
