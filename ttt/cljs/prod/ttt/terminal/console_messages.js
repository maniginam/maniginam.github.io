// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.terminal.console_messages');
goog.require('cljs.core');
goog.require('ttt.master.core');
cljs.core._add_method.call(null,ttt.master.core.welcome,new cljs.core.Keyword(null,"terminal","terminal",-927870592),(function (console){
return cljs.core.println.call(null,"Welcome to Tic-Tac-Toe!");
}));
ttt.terminal.console_messages.game_type_message = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Computer-v-Computer","Human-v-Computer","Human-v-Human"], null);
ttt.terminal.console_messages.board_size_prompt_message = "What size grid do you want to play on?";
ttt.terminal.console_messages.level_prompt = (function ttt$terminal$console_messages$level_prompt(){
return "Select a Level:\n  E - Easy\n  M - Medium\n  H - Hard";
});
ttt.terminal.console_messages.box_taken = (function ttt$terminal$console_messages$box_taken(box){
return ["box ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(box)," is already taken"].join('');
});
ttt.terminal.console_messages.ask_to_play_again = "Do you want to play again?  Y or N";
ttt.terminal.console_messages.ask_restart = "Do you want to start up where you left last game? Y or N";

//# sourceMappingURL=console_messages.js.map
