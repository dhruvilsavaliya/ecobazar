import React, { useEffect } from 'react'
import CstmModal from '../common/CstmModal'
import CstmContainer from '../common/CstmContainer';

const NewsLetterModal = () => {
  const [modalShow, setModalShow] = React.useState(false);
    // Show modal automatically after 5 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        setModalShow(true);
      }, 5000);
  
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);
  const NewsLetterModalData = [
    {
      title: 'Subcribe to Our Newsletter',
      description: 'Subscribe to our newlletter and Save your with discount code today.',
      placeholder: 'Enter your email',
      btnText: 'Subscribe',
      variant: 'primary',
      type: 'Do not show this window',
      offerDescription:'20% money',
    }
  ]
  return (
    <CstmContainer>
      <div className='text-center'>
        {NewsLetterModalData.map((data, index) => (
          <div key={index}>
            <CstmModal show={modalShow}
              onHide={() => setModalShow(false)}
              title={data.title} description={data.description} offerDescription={data.offerDescription} placeholder={data.placeholder} btnText={data.btnText} variant={data.variant} type={data.type} />
          </div>
        ))}
      </div>
    </CstmContainer>
  )
}

export default NewsLetterModal
