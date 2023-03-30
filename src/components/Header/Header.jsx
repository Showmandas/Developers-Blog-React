import React from 'react';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="#">Developer Cafe</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Programming</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Developing</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;