import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import useProduct from '../../hooks/useProduct';

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter();
  const product = useProduct(Number(id));

  const onClick = useCallback(() => {
    window.gtag('event', 'navigate to Mypage Screen', {
      category: 'navigation',
      debug_mode: true,
    });
    window.ReactNativeWebView.postMessage('MyPageScreen');
  }, []);

  return (
    <div>
      <Image
        src={product?.information.coverImagePath}
        width={300}
        height={300}
        layout='fixed'
        alt='prod-image'
      />
      <button onClick={onClick}>네이티브로 메시지 보내기</button>
    </div>
  );
};

export default ProductPage;
