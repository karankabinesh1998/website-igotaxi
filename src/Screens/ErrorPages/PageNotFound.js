import React from 'react'

export default function PageNotFound() {
  return (
    <React.Fragment>
      <div class="tj-inner-banner">
        <div class="container">
          <h2>404</h2>
        </div>
      </div>
      <div class="tj-breadcrumb">
				<div class="container">
					<ul class="breadcrumb-list">
						<li><a href="/">Home</a></li>
						<li class="active">404</li>
					</ul>
				</div>
	    	</div>
        <section class="tj-p404-section">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<strong class="p404-title">404</strong>
							<h2>Page Not Found</h2>
							<div class="p404-info">
								<p>We can’t seem to find the page you’re looking for</p>
								<a href="/"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to Home</a>
							</div>
						</div>
					</div>
				</div>
			</section>
    </React.Fragment>
  )
}
