const assert = require('assert');
const Pedido = require('../pedido');

describe("Sistema de Pedidos", function(){
    let pedido;
    this.beforeEach(function(){
        pedido = new Pedido();
    });

    it("deve adicionar itens ao pedido",function(){
        pedido.adicionarItem("Hamburguer",10.5,2);
        pedido.adicionarItem("Batata Frita",5.0,1);
        assert.strictEqual(pedido.itens.length,2);
    });
    it("deve calcular o total do pedido corretamente", function(){
        pedido.adicionarItem("Hamburguer",10.5,2);
        pedido.adicionarItem("Batata Frita",5.0,1);
    
        const total = pedido.calcularTotal();
        assert.strictEqual(total, 31.0);
    })
    it("deve aplicar desconto ao pedido", function(){
        pedido.adicionarItem("Hamburguer",10.0,2);
        pedido.aplicarDesconto("PROMO10");
        const totalComDesconto = pedido.calcularTotal();
        assert.strictEqual(totalComDesconto, 23.0)
        
    })

});