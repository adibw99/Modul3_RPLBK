export default function infoBuy(props) {
  const { name, nomor, email } = props;
  return (
    <a className="">
      <i class="fa fa" aria-hidden="true"></i>
      <div className="mt-6 flex justify-between">
        <div>
          <p className="mt-1 font-medium text-sm text-white-900">{name}</p>
          <p className="mt-1 font-medium text-sm text-white-900">{nomor}</p>
          <p className="mt-1 font-medium text-sm text-white-900">{email}</p>
        </div>
      </div>
    </a>
  );
}
