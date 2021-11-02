/**
 * 
 */
package com.webtactoe.sockets;

import java.io.IOException;
import java.util.HashMap;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

/**
	author: Vicky pl
	email: vicky542011@gmail.com
	mobile: 7828789845
 **/
/**
 * @author Anonymox
 *
 */
@ServerEndpoint(value="/playgame/{username}")
public class GamePlaySocket {

	static HashMap<String, Session> gameroom = new HashMap<String, Session>();
	
	@OnOpen
	public void onOpen(Session session, @PathParam("username") String username) {
		
		gameroom.put(username, session);
		String msg = "is Playing";
		System.out.println(session.getId()+" is Connected.");
		try {
			session.getBasicRemote().sendText(msg);
		} catch(IOException e) {
			e.printStackTrace();
		}
	}
	
	@OnMessage
	public void onMessage(String msg, Session session) {

		System.out.println("msg : "+msg);
		
		String[] sendToSymbol = msg.split("~");
		String symbolTo = sendToSymbol[0].trim();
		String symbol = sendToSymbol[1].trim();
		String position = sendToSymbol[2].trim();
		
		System.out.println("msg1 : "+symbolTo);
		System.out.println("msg2 : "+symbol);
		System.out.println("msg3 : "+position);
		
		
		Session ts = gameroom.get(symbolTo);
		try {
				ts.getBasicRemote().sendText(symbol+"~"+position);
		} catch(IOException e) {
				e.printStackTrace();
		} catch (IllegalStateException e) {
			System.out.println("error: "+e);
		}
	}
	
	@OnError
	public void onError(Session session, Throwable error) {
		System.out.println("Error in WebSocket:-> "+error);
	}
	
	@OnClose
	public void onClose(Session session) {
		try {
			gameroom.remove(session);
				session.close();
		} catch (IOException | IllegalStateException e) {
			e.printStackTrace();
		}
		System.out.println(session.getId()+" game Dissconnected..");
	}
	
	public static HashMap<String, Session> getActiveSessions() {
		return gameroom;
	}
}