import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={'next js, react js,' + keywords}/>
        <title>Главная страница!!!</title>
      </Head>
      <div className='navbar'>
        <A href={'/'} text='Main'/>
        <A href={'/users'} text='Users'/>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar {
            background: #232a6c;
            font-size: 14px;
            padding: 1em;
          }`
        }
      </style>
    </>
  );
};

export default MainContainer;
