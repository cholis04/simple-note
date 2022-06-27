import EmptyInboxDesktop from '../../assets/images/Empty_Inbox_Outline_Desktop.png';
import EmptyInboxMobile from '../../assets/images/Empty_Inbox_Outline_Mobile.png';

function Empty({ openModal }) {
  return (
    <div className="box-empty">
      <picture>
        <source media="(min-width:768px)" srcSet={EmptyInboxDesktop} />
        <img src={EmptyInboxMobile} alt="" />
      </picture>
      <p>
        Catatan singkat tidak ditemukan,{' '}
        <button onClick={openModal}>Buat sekarang!</button>
      </p>
    </div>
  );
}

export default Empty;
