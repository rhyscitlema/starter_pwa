#include "controllers/base.h"

/* Called only once per child process, without concurrency between processes. Use to seed the database. */
static void prepare_database(HttpContext *c)
{
	(void)c; // unused for now
}

/* Called only once per child process, without concurrency between threads. Use to register endpoints. */
static void prepare_process(HttpContext *c)
{
	(void)c; // unused for now
	register_home_controller();
}

apr_status_t http_request_handler(const module_rec *m, request_rec *r)
{
	HttpContext c[1]; // no need to clear
	http_context_init(c, m, r, NULL, DBMS_MySQL);

	http_startup_init(c, prepare_database, prepare_process);

	apr_status_t status = get_endpoint(c);

	if (status == OK)
		status = authenticate_access(c);

	if (status == OK)
		status = authorize_endpoint(c);

	if (status == OK)
		status = execute_endpoint(c);

	return http_context_cleanup(c, status);
}

/* Called only once per child process before it exits. Use to cleanup resources. */
apr_status_t child_process_cleanup(const module_rec *m)
{
	return finish_process_cleanup(m, OK);
}
