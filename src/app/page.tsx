import React from 'react';
import Link from 'next/link';
import Heading from './components/heading_checkout';
import Banner from './components/banner';
import Footer from './components/footer';

export default function Website() {
  return (<>
      <Heading />
      <Banner />
      <Footer />
      </>
  );
}
