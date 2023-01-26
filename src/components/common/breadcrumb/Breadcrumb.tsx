const Breadcrumb = ({ bread }: BreadcrumbType) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {bread.map((crumb) => (
          <li key={crumb}>{crumb}</li>
        ))}
      </ul>
    </div>
  );
};
export default Breadcrumb;
