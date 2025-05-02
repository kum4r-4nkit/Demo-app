const Home = () => {
  return (
    <section className="flex sm:flex-row-reverse flex-col text-center sm:p-16 p-2">
      <div className="self-center p-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Site!</h2>
        <p className="text-gray-600 mb-6">
          We're glad you're here. Explore our services, get to know us, and feel free to reach out!
        </p>
      </div>
      <img
        src="https://plus.unsplash.com/premium_photo-1682104376321-63afb07e8f97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Home banner"
        className="rounded-4xl mx-auto w-96"
      />
    </section>
  );
}

export default Home;
