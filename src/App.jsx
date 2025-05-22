import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Posts from './pages/Posts';
import MyAwesomeBlogPost from './pages/posts/MyAwesomePost'; // Import the post component

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial path based on current hash, or default to '#/'
    // This ensures the correct component loads on initial page load or refresh
    if (window.location.hash) {
      setCurrentPath(window.location.hash);
    } else {
      setCurrentPath('#/');
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  let PageComponent;
  // Check for specific post routes first
  if (currentPath === '#/posts/my-awesome-blog-post') {
    PageComponent = MyAwesomeBlogPost;
  } else {
    // Handle other main pages
    switch (currentPath) {
      case '#/about':
        PageComponent = AboutMe;
        break;
      case '#/projects':
        PageComponent = Projects;
        break;
      case '#/posts':
        PageComponent = Posts; // This is the list of posts
        break;
      case '#/':
      case '': // Handle empty hash as home
        PageComponent = Home;
        break;
      default:
        PageComponent = Home; // Default to Home for any unrecognized hash
    }
  }

  return (
    <div className="app">
      <Navbar />
      <PageComponent />
    </div>
  );
}