interface FormData {
  email: string;
  password: string;
}

function getLoginData(email: string, password: string): FormData {
  const formData: FormData = {
    email,
    password,
  };
  return formData;
}

export default getLoginData;
