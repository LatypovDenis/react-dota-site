import './Footer.css'
export const Footer = ({ year }) => {
    return (
        <div className='footer'>
          <span> Feel Good Inc. - {year}</span>
        </div>
    );
};