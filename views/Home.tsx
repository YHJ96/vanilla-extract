import React from 'react';
import { Card, Button, Alert, RecipesButton } from '@/components';

function Home() {
  return (
    <main style={{ display: 'inline-flex', flexDirection: 'column', gap: '12px', padding: '10px 16px' }}>
      <Card />
      <hr />
      <Button variant="primary">상세보기</Button>
      <hr />
      <Alert />
      <hr />
      <RecipesButton>합성 버튼</RecipesButton>
    </main>
  );
}

export default Home;
