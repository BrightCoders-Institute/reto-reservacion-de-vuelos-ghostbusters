interface FormData {
  firstName: string;
  email: string;
  password: string;
}

function getFormData(
  firstName: string,
  email: string,
  password: string,
): FormData {
  const formData: FormData = {
    firstName,
    email,
    password,
  };
  return formData;
}

export default getFormData;
