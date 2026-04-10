#include "controllers/base.h"

static void prepare_process(HttpContext *c)
{
	(void)c;
	register_home_controller();
}

apr_status_t http_request_handler(const module_rec *m, request_rec *r)
{
	HttpContext c[1];
	http_context_init(c, m, r, NULL, DBMS_Auto);
	http_startup_init(c, NULL, prepare_process);

	apr_status_t status = get_endpoint(c);
	if (status == OK)
		status = authorize_endpoint(c);
	if (status == OK)
		status = execute_endpoint(c);
	return http_context_cleanup(c, status);
}

apr_status_t child_process_cleanup(const module_rec *m)
{
	return finish_process_cleanup(m, OK);
}
