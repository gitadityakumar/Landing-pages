export default function Footer(){
  return (
    <footer className="py-10 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 grid sm:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold text-gray-800">SPRING</h4>
          <p className="mt-2">Design and branding agency based in newy, USA</p>
        </div>
        <div>
          <h5 className="font-medium text-gray-800">Product</h5>
          <ul className="mt-2 space-y-1">
            <li>Features</li>
            <li>Security</li>
            <li>Teams</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-800">Solution</h5>
          <ul className="mt-2 space-y-1">
            <li>Procurement</li>
            <li>Sales</li>
            <li>Technology</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-800">Company</h5>
          <ul className="mt-2 space-y-1">
            <li>Careers</li>
            <li>Case Study</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
