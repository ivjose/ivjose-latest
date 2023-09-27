// export const prerender = false;

export async function POST({ request }: { request: Request }) {
  const data = await request.json();

  const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify';

  const requestBody = {
    secret: import.meta.env.SECRET_SECRET_KEY, // This can be an environment variable
    response: data.token, // The token passed in from the client
  };

  try {
    const response = await fetch(recaptchaURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(requestBody).toString(),
    });

    const responseData = await response.json();

    if (responseData.success) {
      console.log(data.values, "form data!!");
      await fetch(import.meta.env.PUBLIC_FORM_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...data.values,
        }),
      });


      
    }

    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error('ERROR:', error);
  }
}
