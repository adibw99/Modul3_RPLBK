export default function ProductList(props) {
  const { id, name, price, imageSrc, imageAlt, category } = props;

  return (
    <a key={id} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img src={imageSrc} alt={imageAlt} className="w-full h-full object-center object-cover group-hover:opacity-75" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-800 ">{name}</h3>
          <p className="mt-1 font-medium text-sm text-gray-900">{price}</p>
        </div>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </a>
  );
}
