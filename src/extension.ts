// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { sync } from 'glob';
import * as vscode from 'vscode';
import * as VHDLUtils from './VHDLUtils';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	function insertString(text: string) {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			editor.edit(editBuilder => {
				// Position (line, character)
				editBuilder.insert(new vscode.Position(editor.selection.active.line, 0), text);
			});
		}
	}

	var INDENT_STR = "";
	const activeEditor = vscode.window.activeTextEditor;
	if (activeEditor) {
		if (activeEditor.options.insertSpaces){
			INDENT_STR = "";				
			if ( typeof activeEditor.options.tabSize === 'number'){
				for (let iter = activeEditor.options.tabSize; iter > 0; iter--){
					INDENT_STR += " ";
				}
			} else {
				INDENT_STR = "  ";
			}
		} else {
			INDENT_STR = '\t';
		}
	}

	var disposable = vscode.commands.registerCommand('VHDLUtils.portCopy', () => {
		const vhdlutils = new VHDLUtils.VHDLUtils("portCopy", INDENT_STR);
		vscode.window.showInformationMessage("VHDLUtils portCopy");
		vhdlutils.copyPorts();
	});
	
	var disposable = vscode.commands.registerCommand('VHDLUtils.portPasteAsInstance', () => {
		const vhdlutils = new VHDLUtils.VHDLUtils("portPasteAsInstance", INDENT_STR);
		var vhdText = "";

		vscode.env.clipboard.readText().then(
			(text)=>{
				vhdText = vhdlutils.pasteInstance(text);
				insertString(vhdText);
				// console.log(vhdText);
			}
		);
		vscode.window.showInformationMessage('portPasteAsInstance');
	});

	var disposable = vscode.commands.registerCommand('VHDLUtils.portPasteAsComponent', () => {
		const vhdlutils = new VHDLUtils.VHDLUtils("portPasteAsComponent", INDENT_STR);
		var vhdText = "";

		vscode.env.clipboard.readText().then(
			(text)=>{
				vhdText = vhdlutils.pasteComponent(text);
				insertString(vhdText);
				// console.log(vhdText);
			}
		);
		

	});

	var disposable = vscode.commands.registerCommand('VHDLUtils.portPasteAsEntity', () => {
		const vhdlutils = new VHDLUtils.VHDLUtils("portPasteAsEntity", INDENT_STR);
		var vhdText = "";
		vscode.env.clipboard.readText().then(
			(text)=>{
				vhdText = vhdlutils.pasteEntity(text);
				insertString(vhdText);
			}
		);
	});

	var disposable = vscode.commands.registerCommand('VHDLUtils.portPasteSignals', () => {
		const vhdlutils = new VHDLUtils.VHDLUtils("portPasteSignals", INDENT_STR);
		var vhdText = "";
		vscode.env.clipboard.readText().then(
			(text)=>{
				vhdText = vhdlutils.pasteSignals(text);
				insertString(vhdText);
			}
		);
	});
	var disposable = vscode.commands.registerCommand('VHDLUtils.portPasteConstants', () => {
		const vhdlutils = new VHDLUtils.VHDLUtils("portPasteConstants", INDENT_STR);
		var vhdText = "";
		vscode.env.clipboard.readText().then(
			(text)=>{
				vhdText = vhdlutils.pasteConstants(text);
				insertString(vhdText);
			}
		);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
