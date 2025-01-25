export default function Sidebar() {
  return (
    <aside className="bg-gray-100 p-4 rounded-lg shadow h-fit w-full md:w-64">
      <h3 className="font-semibold text-lg mb-4 p-3 w-full rounded-lg bg-[#6FBDF5]">
        Services Category
      </h3>
      <ul className="space-y-2">
        <li className="hover:bg-[#6FBDF5] hover:text-white p-2 text-black rounded text-sm text-nowrap cursor-pointer">
          Custom Manufacturing Systems
        </li>
        <li className="hover:bg-[#6FBDF5] hover:text-white p-2 text-black rounded text-sm text-nowrap cursor-pointer">
          Industrial Automation
        </li>
        <li className="hover:bg-[#6FBDF5] hover:text-white p-2 text-black rounded text-sm text-nowrap cursor-pointer">
          Product Design & Integration
        </li>
        <li className="hover:bg-[#6FBDF5] hover:text-white p-2 text-black rounded text-sm text-nowrap cursor-pointer">
          Maintenance & Support
        </li>
        <li className="hover:bg-[#6FBDF5] hover:text-white p-2 text-black rounded text-sm text-nowrap cursor-pointer">
          Research & Development
        </li>
      </ul>
      <div className="mt-6 bg-gradient-to-r from-gray-800 to-gray-600 text-white p-4 rounded-lg text-center">
        <p className="font-bold">Need help?</p>
        <a href="tel:+1234567890" className="text-sm">
          Talk with us
        </a>
        <p className="text-sm">robotics@toplax.com</p>
      </div>
    </aside>
  );
}
