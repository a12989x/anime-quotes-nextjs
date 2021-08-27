import Link from '../Link';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__made'>
        Made with ❤️ by{' '}
        <Link href='https:github.com/a12989x/' className='footer__link'>
          Codax
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
