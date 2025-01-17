import request from 'supertest';
import app from '../server.mjs';  // Adjust the path to your Express app

// Helper function to create a form for testing purposes
const createForm = async (email, name, password) => {
  const response = await request(app)
    .post('/forms')
    .send({ email, name, password });
  return response.body;
};

describe('Forms API', () => {
  
  // Test GET all forms
  it('should get all forms', async () => {
    const response = await request(app).get('/forms');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Should return an array of forms
  });

  // Test GET form by ID
  it('should get a form by ID', async () => {
    // First, create a form to get
    const { email, name, password } = { email: 'test@test.com', name: 'Test User', password: 'testpassword' };
    const createResponse = await createForm(email, name, password);
    const createdFormId = createResponse.id; // Get the created form ID

    const response = await request(app).get(`/forms/${createdFormId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', createdFormId);
  });

  // Test POST (create a new form)
  it('should create a new form', async () => {
    const newForm = {
      email: 'newuser@test.com',
      name: 'New User',
      password: 'newpassword',
    };

    const response = await request(app)
      .post('/forms')
      .send(newForm);

    expect(response.status).toBe(200);
    expect(response.text).toContain(`Form with email ${newForm.email} has been added.`);
  });

  // Test PUT (update a form by ID)
  it('should update a form', async () => {
    // First, create a form to update
    const { email, name, password } = { email: 'testupdate@test.com', name: 'Update User', password: 'oldpassword' };
    const createResponse = await createForm(email, name, password);
    const createdFormId = createResponse.id;

    const updatedForm = {
      email: 'updateduser@test.com',
      name: 'Updated User',
      password: 'newpassword',
    };

    const response = await request(app)
      .put(`/forms/${createdFormId}`)
      .send(updatedForm);

    expect(response.status).toBe(200);
    expect(response.text).toContain(`Form with ID ${createdFormId} has been updated.`);
  });

  // Test DELETE (delete a form by ID)
  it('should delete a form by ID', async () => {
    // First, create a form to delete
    const { email, name, password } = { email: 'testdelete@test.com', name: 'Delete User', password: 'deletepassword' };
    const createResponse = await createForm(email, name, password);
    const createdFormId = createResponse.id;

    const response = await request(app).delete(`/forms/${createdFormId}`);

    expect(response.status).toBe(200);
    expect(response.text).toContain(`Form with the record ID ${createdFormId} has been removed.`);
  });
});
