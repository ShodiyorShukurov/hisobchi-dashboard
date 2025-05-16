import { Card, Image, Result, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ImagePage = () => {
  const { id } = useParams();
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const Login = async () => {
    setLoading(true);
    try {
      const loginData = {
        admin_email: 'test@gmail.com',
        admin_password: '12345678t',
      };
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        }
      );
      const data = await response.json();
      getImage(data.token);
    } catch (error) {}
  };

  const getImage = async (token: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/report/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Token: `${token}`,
          },
        }
      );
      const data = await response.json();
      setImage(data?.data?.image_url);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  useEffect(() => {
    Login();
  }, []);
  return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card
        className="w-full max-w-md shadow-xl"
        bodyStyle={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '300px',
          justifyContent: 'center',
        }}
        bordered={false}
      >
        {loading ? (
          <Spin size="large" tip="Yuklanmoqda..." />
        ) : image ? (
          <div className="flex flex-col items-center w-full">
            <div
              className="rounded-xl overflow-hidden cursor-pointer relative"
            >
              <Image
                width={300}
                src={image}
                style={{
                  objectFit: 'cover',
                  maxHeight: '300px',
                  width: '100%',
                  transition: 'transform 0.4s ease-in-out, box-shadow 0.3s ease',
                }}
                className="hover:scale-105 hover:shadow-lg"
              />
            </div>
            <p className="text-sm text-gray-500">
              Kattalashtirish uchun rasm ustiga bosing
            </p>
          </div>
        ) : (
          <Result
            status="info"
            title="Rasm mavjud emas"
          />
        )}
      </Card>
    </div>
  );
};

export default ImagePage;
