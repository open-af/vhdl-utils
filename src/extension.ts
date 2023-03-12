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
	
	var disposable = vscode.commands.registerCommand('VHDLUtils.portCopy', () => {
		const vhdlutils = new VHDLUtils.VHDLUtils("portCopy");
		vscode.window.showInformationMessage("VHDLUtils portCopy");
		vhdlutils.copyPorts();
	});
	
	var disposable = vscode.commands.registerCommand('VHDLUtils.portPasteAsInstance', () => {
		const vhdlutils = new VHDLUtils.VHDLUtils("portPasteAsInstance");
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
		const vhdlutils = new VHDLUtils.VHDLUtils("portPasteAsComponent");
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
		const vhdlutils = new VHDLUtils.VHDLUtils("portPasteAsEntity");
		var vhdText = "";
		vscode.env.clipboard.readText().then(
			(text)=>{
				vhdText = vhdlutils.pasteEntity(text);
				insertString(vhdText);
			}
		);
	});

	var disposable = vscode.commands.registerCommand('VHDLUtils.portPasteSignals', () => {
		const vhdlutils = new VHDLUtils.VHDLUtils("portPasteSignals");
		var vhdText = "";
		vscode.env.clipboard.readText().then(
			(text)=>{
				vhdText = vhdlutils.pasteSignals(text);
				insertString(vhdText);
			}
		);
	});
	var disposable = vscode.commands.registerCommand('VHDLUtils.portPasteConstants', () => {
		const vhdlutils = new VHDLUtils.VHDLUtils("portPasteConstants");
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
