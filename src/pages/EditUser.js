import React from 'react';
import { useParams } from 'react-router-dom';
import Form from '../components/form';

export default function EditUser() {
    const params=useParams();
  return <div>
      <Form data={params}></Form>
  </div>;
}
