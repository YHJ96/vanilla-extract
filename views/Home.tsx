import React from 'react';
import { Card, Button, Alert } from '@/components';

function Home() {
  return (
    <main>
      <Card />
      <hr />
      <Button variant="primary">상세보기</Button>
      <hr />
      <Alert />
    </main>
  );
}

export default Home;
