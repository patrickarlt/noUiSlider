
function closure ( target, options, originalOptions ){

	var actions = getActions( );

	// All variables local to 'closure' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_PreviousCalcPoint;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;

	// Constants for code clarity
	var APPLY_MARGIN = true;
	var APPLY_LIMIT = true;
	var LOOK_FORWARD = true;
