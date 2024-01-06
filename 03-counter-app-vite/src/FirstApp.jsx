import PropTypes from 'prop-types';

// const newMessage = {
//   message: "Hola Mundo",
//   title: "Luly"
// }

// const getMessage = (obj) => {
//   return `${obj.message}, ${obj.title}!!`; 
// }

export const FirstApp = ({ title, subTitle, name }) => {
  return ( 
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <h1>{getMessage(newMessage)}</h1> */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "No hay título",
  subTitle: "No hay subtítulo",
  name: "Luly Atilano",
};
