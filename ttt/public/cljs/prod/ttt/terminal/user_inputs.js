// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.terminal.user_inputs');
goog.require('cljs.core');
goog.require('ttt.board.board');
goog.require('ttt.terminal.console_messages');
goog.require('ttt.master.core');
ttt.terminal.user_inputs.bad_type = (function ttt$terminal$user_inputs$bad_type(input){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)," is not a valid option"].join(''));

return false;
});
ttt.terminal.user_inputs.valid_for_int_type_QMARK_ = (function ttt$terminal$user_inputs$valid_for_int_type_QMARK_(input){
return cljs.core.int_QMARK_.call(null,(function (){try{return Integer.parseInt(input);
}catch (e9734){if((e9734 instanceof ttt.terminal.user_inputs.Exception)){
var e = e9734;
return ttt.terminal.user_inputs.bad_type.call(null,input);
} else {
throw e9734;

}
}})());
});
ttt.terminal.user_inputs.valid_user_count_option_QMARK_ = (function ttt$terminal$user_inputs$valid_user_count_option_QMARK_(input){
return (((input >= (0))) && ((input <= (2))));
});
ttt.terminal.user_inputs.bad_user_count = (function ttt$terminal$user_inputs$bad_user_count(input){
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)," is not an option"].join(''));

return false;
});
ttt.terminal.user_inputs.valid_user_count_QMARK_ = (function ttt$terminal$user_inputs$valid_user_count_QMARK_(input){
if(ttt.terminal.user_inputs.valid_for_int_type_QMARK_.call(null,input) === true){
if(ttt.terminal.user_inputs.valid_user_count_option_QMARK_.call(null,Integer.parseInt(input))){
return true;
} else {
return ttt.terminal.user_inputs.bad_user_count.call(null,input);
}
} else {
return null;
}
});
ttt.terminal.user_inputs.ask_num_of_players = (function ttt$terminal$user_inputs$ask_num_of_players(){
cljs.core.println.call(null,"0 Computer v Computer");

cljs.core.println.call(null,"1 Human v Computer");

cljs.core.println.call(null,"2 Human v Human");

cljs.core.println.call(null,"How many humans are playing?  Please enter 0, 1, or 2");

return ttt.terminal.user_inputs.read_line.call(null);
});
ttt.terminal.user_inputs.too_many_players_tries = (function ttt$terminal$user_inputs$too_many_players_tries(){
cljs.core.println.call(null,"Nevermind, I'll play on my own.");

return (0);
});
cljs.core._add_method.call(null,ttt.master.core.offer_position,new cljs.core.Keyword(null,"terminal","terminal",-927870592),(function (console){
cljs.core.println.call(null,"X goes first.  Do you want to be X or O");

return ttt.terminal.user_inputs.read_line.call(null);
}));
ttt.terminal.user_inputs.valid_type_string_QMARK_ = (function ttt$terminal$user_inputs$valid_type_string_QMARK_(input){
if(cljs.core._EQ_.call(null,"",input)){
cljs.core.println.call(null,"You didn't enter anything");

return false;
} else {
return (!((function (){try{return input.toUpperCase();
}catch (e9735){if((e9735 instanceof ttt.terminal.user_inputs.Exception)){
var e = e9735;
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)," not valid option"].join(''));

return false;
} else {
throw e9735;

}
}})() === false));
}
});
ttt.terminal.user_inputs.valid_position_QMARK_ = (function ttt$terminal$user_inputs$valid_position_QMARK_(input){
if(ttt.terminal.user_inputs.valid_type_string_QMARK_.call(null,input)){
if(((cljs.core._EQ_.call(null,"X",input.toUpperCase())) || (cljs.core._EQ_.call(null,"O",input.toUpperCase())))){
return true;
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)," is not an option."].join(''));

return false;
}
} else {
return null;
}
});
ttt.terminal.user_inputs.set_position = (function ttt$terminal$user_inputs$set_position(input){
if(cljs.core._EQ_.call(null,"X",input.toUpperCase())){
return new cljs.core.Keyword(null,"human","human",-772334390);
} else {
return new cljs.core.Keyword(null,"computer","computer",-1035300443);
}
});
ttt.terminal.user_inputs.valid_level_QMARK_ = (function ttt$terminal$user_inputs$valid_level_QMARK_(input){
if(ttt.terminal.user_inputs.valid_type_string_QMARK_.call(null,input)){
if(((cljs.core._EQ_.call(null,"H",input.toUpperCase())) || (cljs.core._EQ_.call(null,"M",input.toUpperCase())) || (cljs.core._EQ_.call(null,"E",input.toUpperCase())))){
return true;
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)," is not an option."].join(''));

return false;
}
} else {
return null;
}
});
cljs.core._add_method.call(null,ttt.master.core.too_many_tries,new cljs.core.Keyword(null,"position","position",-2011731912),(function (input){
cljs.core.println.call(null,"Nevermind, I'll go first.");

return "O";
}));
cljs.core._add_method.call(null,ttt.master.core.too_many_tries,new cljs.core.Keyword(null,"play-again","play-again",184461122),(function (input){
cljs.core.println.call(null,"I'll take that as a No.  Let's play again soon!");

return false;
}));
cljs.core._add_method.call(null,ttt.master.core.too_many_tries,new cljs.core.Keyword(null,"restart?","restart?",1861076105),(function (input){
cljs.core.println.call(null,"Let's just start you with a new game");

return false;
}));
cljs.core._add_method.call(null,ttt.master.core.too_many_tries,new cljs.core.Keyword(null,"level","level",1290497552),(function (input){
cljs.core.println.call(null,"I'll pick for you...  Hard!");

return new cljs.core.Keyword(null,"hard","hard",2068420191);
}));
ttt.terminal.user_inputs.std_board_msg = (function ttt$terminal$user_inputs$std_board_msg(){
cljs.core.println.call(null,"Nevermind, let's play a standard 3x3 board");

return (3);
});
cljs.core._add_method.call(null,ttt.master.core.board_size_prompt,new cljs.core.Keyword(null,"terminal","terminal",-927870592),(function (console){
cljs.core.println.call(null,ttt.terminal.console_messages.board_size_prompt_message);

return ttt.terminal.user_inputs.read_line.call(null);
}));
ttt.terminal.user_inputs.ask_for_box = (function ttt$terminal$user_inputs$ask_for_box(){
cljs.core.println.call(null,"Select a box");

return ttt.terminal.user_inputs.read_line.call(null);
});
ttt.terminal.user_inputs.valid_box_type_QMARK_ = (function ttt$terminal$user_inputs$valid_box_type_QMARK_(input){
return cljs.core.int_QMARK_.call(null,(function (){try{return Integer.parseInt(input);
}catch (e9736){if((e9736 instanceof ttt.terminal.user_inputs.Exception)){
var e = e9736;
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)," is not a valid option"].join(''));

return false;
} else {
throw e9736;

}
}})());
});
ttt.terminal.user_inputs.box_open_QMARK_ = (function ttt$terminal$user_inputs$box_open_QMARK_(input,board){
if(ttt.board.board.is_box_open_QMARK_.call(null,board,input)){
return true;
} else {
cljs.core.println.call(null,["box ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)," is already taken"].join(''));

return false;
}
});
ttt.terminal.user_inputs.valid_box_option_QMARK_ = (function ttt$terminal$user_inputs$valid_box_option_QMARK_(input,board){
if((((input >= (0))) && ((input < cljs.core.count.call(null,board))))){
return true;
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)," is not a box option"].join(''));

return false;
}
});
ttt.terminal.user_inputs.valid_box_QMARK_ = (function ttt$terminal$user_inputs$valid_box_QMARK_(input,board){
if(ttt.terminal.user_inputs.valid_box_type_QMARK_.call(null,input)){
var input__$1 = Integer.parseInt(input);
if(ttt.terminal.user_inputs.valid_box_option_QMARK_.call(null,input__$1,board)){
return ttt.terminal.user_inputs.box_open_QMARK_.call(null,input__$1,board);
} else {
return false;
}
} else {
return null;
}
});
ttt.terminal.user_inputs.validate_box_input = (function ttt$terminal$user_inputs$validate_box_input(board){
var input = ttt.terminal.user_inputs.ask_for_box.call(null);
while(true){
if(cljs.core.truth_(ttt.terminal.user_inputs.valid_box_QMARK_.call(null,input,board))){
return Integer.parseInt(input);
} else {
var G__9737 = ttt.terminal.user_inputs.ask_for_box.call(null);
input = G__9737;
continue;
}
break;
}
});
ttt.terminal.user_inputs.valid_yes_or_no_input_QMARK_ = (function ttt$terminal$user_inputs$valid_yes_or_no_input_QMARK_(input){
if(ttt.terminal.user_inputs.valid_type_string_QMARK_.call(null,input)){
if(((cljs.core._EQ_.call(null,"Y",input.toUpperCase())) || (cljs.core._EQ_.call(null,"N",input.toUpperCase())))){
return true;
} else {
cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)," is not an option."].join(''));

return false;
}
} else {
return null;
}
});
ttt.terminal.user_inputs.get_play_again_input = (function ttt$terminal$user_inputs$get_play_again_input(){
cljs.core.println.call(null,ttt.terminal.console_messages.ask_to_play_again);

return ttt.terminal.user_inputs.read_line.call(null);
});
cljs.core._add_method.call(null,ttt.master.core.get_restart_input,new cljs.core.Keyword(null,"terminal","terminal",-927870592),(function (console){
cljs.core.println.call(null,ttt.terminal.console_messages.ask_restart);

return ttt.terminal.user_inputs.read_line.call(null);
}));

//# sourceMappingURL=user_inputs.js.map
