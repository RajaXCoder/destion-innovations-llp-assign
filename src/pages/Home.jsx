const Home = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-6">
        Welcome to the E-Commerce Portal
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center mb-8 max-w-2xl">
        Manage your invoices and products with ease. Streamline your business
        operations and boost productivity with our powerful tools.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex gap-4">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm md:text-md lg:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          onClick={() => (window.location.href = "/invoices")}
        >
          Manage Invoices
        </button>
        <button
          className="bg-purple-600 text-white px-6 py-3 rounded-lg text-sm md:text-md lg:text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          onClick={() => (window.location.href = "/products")}
        >
          Manage Products
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-4">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Easy Invoicing
          </h2>
          <p className="text-gray-600">
            Create, manage, and track invoices effortlessly with our intuitive
            tools.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Product Management
          </h2>
          <p className="text-gray-600">
            Organize and update your product catalog with ease.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Analytics & Reports
          </h2>
          <p className="text-gray-600">
            Gain insights into your business with detailed analytics and
            reports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
