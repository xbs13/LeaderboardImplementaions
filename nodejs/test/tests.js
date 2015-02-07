// Generated by CoffeeScript 1.8.0
(function() {
  var LeaderBoard, chai, expect;

  chai = require("chai");

  LeaderBoard = require("../lib/leaderboard.js");

  expect = chai.expect;

  describe("LeaderBoard", function() {
    var lb;
    lb = new LeaderBoard("game");
    describe("create", function() {
      return it('should create a new board', function() {
        return expect(lb.id).equal("game");
      });
    });
    describe("clear", function() {
      return it("should clear the board", function() {
        return lb.clear(function(err, success) {
          if (err) {
            throw err;
          }
          return expect(success).equal(1);
        });
      });
    });
    describe("rankMember", function() {
      it('should rank a member', function() {
        return lb.rankMember("testMember", 10000, function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(true);
        });
      });
      return it('should rank 2 more members', function() {
        var i;
        i = 1;
        lb.rankMember("testMember2", 2, function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(true);
        });
        lb.rankMember("testMember3", 1, function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(true);
        });
        return lb.rankMember("testMember4", 3, function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(true);
        });
      });
    });
    describe('getCount', function() {
      return it('should return total members', function() {
        var num;
        num = 4;
        return lb.getCount(function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(num);
        });
      });
    });
    describe("rank", function() {
      return it("should get the rank of members", function() {
        lb.rank("testMember", function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(0);
        });
        lb.rank("testMember4", function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(1);
        });
        lb.rank("testMember2", function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(2);
        });
        return lb.rank("testMember3", function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(3);
        });
      });
    });
    describe("score", function() {
      return it("should return score", function() {
        lb.score("testMember", function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(10000);
        });
        return lb.score("testMember2", function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(2);
        });
      });
    });
    describe("delete", function() {
      return it("should delete a member", function() {
        return lb["delete"]("testMember2", function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(true);
        });
      });
    });
    describe("isMember", function() {
      it("should return false for a nonmember", function() {
        return lb.isMember("testMember2", function(err, res) {
          console.log("is member outer sanity");
          if (err) {
            throw err;
          }
          return expect(res).equal(false);
        });
      });
      return it("should return true for a member", function() {
        return lb.isMember("testMember4", function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(true);
        });
      });
    });
    describe("getMember", function() {
      return it("should return member", function() {
        return lb.getMember("testMember", function(err, res) {
          if (err) {
            throw err;
          }
          expect(res).not.equal(false);
          expect(res.rank).equal(0);
          expect(res.score).equal(10000);
          return expect(res.member).equal("testMember");
        });
      });
    });
    describe("isMemberInRange", function() {
      it("should return true if range is max", function() {
        return lb.isMemberInRange(0, 10, "testMember3", function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(true);
        });
      });
      return it('should return false if member is out of range', function() {
        return lb.isMemberInRange(1, 4, "testMember", function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res).equal(false);
        });
      });
    });
    describe("getAll", function() {
      return it("should return all members", function() {
        return lb.getAll(function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res.length).equal(3);
        });
      });
    });
    describe("getTop", function() {
      it("should return top 1", function() {
        return lb.getTop(1, function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res.length).equal(1);
        });
      });
      return it("should get top 3", function() {
        return lb.getTop(3, function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res.length).equal(3);
        });
      });
    });
    return describe("getAround", function() {
      it("should get the 2 around testMember4", function() {
        return lb.getAround("testMember4", 1, function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res.length).equal(3);
        });
      });
      return it("should get the 1 around testMember3", function() {
        return lb.getAround("testMember3", 1, function(err, res) {
          if (err) {
            throw err;
          }
          return expect(res.length).equal(2);
        });
      });
    });
  });

}).call(this);
