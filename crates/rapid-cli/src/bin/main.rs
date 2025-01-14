use rapid_cli::cli::{CliError, Config, RapidCLI};
fn main() -> Result<(), CliError<'static>> {
	// TODO: eventually, the user will be able to persist settings via a global config file
	// and all those settings will be loaded in and passed to this object (ex: rapid configure or rapid auth)
	let app = RapidCLI::new(Config {});
	let args = RapidCLI::parse().get_matches();
	app.run(args)
}
