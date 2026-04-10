#include "base.h"

static apr_status_t app_page(HttpContext *c)
{
	c->constants.layout_file = NO_LAYOUT_FILE;
	set_page_title(c, "Starter PWA");
	return process_view(c);
}

static apr_status_t home_page(HttpContext *c)
{
	return http_redirect(c, "/app", HTTP_MOVED_TEMPORARILY, true);
}

void register_home_controller(void)
{
	add_endpoint(M_GET, "/", home_page, 0);
	add_endpoint(M_GET, "/app", app_page, 0);
}
